const asyncHandler = require("express-async-handler");
const {
  plan_fetch,
  get_operator,
  recharge_status,
  dth_info_fetch,
} = require("../../cyrus_apis/endpoints");
const axios = require("axios");
const xml2js = require("xml2js");
const cron = require("node-cron");
const moment = require("moment");
const User = require("../../models/userSchema");
const BBPS = require("../../models/service/bbps");
const Wallet = require("../../models/walletSchema");
const DTH = require("../../models/service/dthSchema");
const Service = require("../../models/serviceSchema");
const successHandler = require("../../common/successHandler");
const Recharge = require("../../models/service/rechargeSchema");
const Notification = require("../../models/notificationSchema");
const sendNotification = require("../../common/sendNotification");
const sendEmail = require("../../common/sendEmail");
const getIpAddress = require("../../common/getIpAddress");
const Transaction = require("../../models/txnSchema");
const CryptoJS = require("crypto-js");
const { createHtmlToPdf } = require("../../common/createHtmlToPdf");
const operatorList = require("../../common/operators");
const { encryptFunc } = require("../../common/encryptDecrypt");
const rechargeApiProviderSchema = require("../../models/service/rechargeApiProviderSchema");
const {
  All_Recharge_Operator_List,
  All_Recharge_Circle_List,
  All_DTH_Recharge_Operator_List,
} = require("../../utils/MockData");
const {
  paywithWallet,
  handleRefund,
  handleCashback,
  handleDisputeRefund,
} = require("../payment");
const { generateOrderId } = require("../../common/generateOrderId");
const CRYPTO_SECRET = process.env.CRYPTO_SECRET;
const nodemailer = require("nodemailer");
const Users = require("../../models/userSchema");
const planFetchProviderSchema = require("../../models/service/planFetchProviderSchema");
const RechargeOperator = require("../../models/service/rechargeOperatorSchema");
const rechargeOperatorSchema = require("../../models/service/rechargeOperatorSchema");
const { saveLog } = require("../../common/logger");
const {
  MobikwikCheckSumGenerate,
  parseXMLToJSON,
} = require("../../common/PayuHashGenerate");

// credentials
// const CYRUS_MEMBER_ID = process.env.CYRUS_MEMBER_ID;
// const CYRUS_PAYMENT_KEY = process.env.CYRUS_PAYMENT_KEY;
// const CYRUS_RECHARGE_KEY = process.env.CYRUS_RECHARGE_KEY;

// EMAIL
const service_email = process.env.COMPANY_EMAIL;
const service_email_password = process.env.COMPANY_EMAIL_PASSWORD;

const planFetch = asyncHandler(async (req, res) => {

  const { Operator_Code, Circle_Code, MobileNumber } = req.query;

  const selectedOperator = await planFetchProviderSchema.findOne({
    isTrue: true,
  });
  // console.log(selectedOperator, "selectedOperator");

  if (selectedOperator.providerCode === 1) {
    const findOp = All_Recharge_Operator_List.find(
      (a) => a.PlanApi_Operator_code == Operator_Code
    );
    const findCir = All_Recharge_Circle_List.find(
      (a) => a.planapi_circlecode == Circle_Code
    );
    const plans = await axios.get(
      `https://alpha3.mobikwik.com/recharge/plans/v2/rechargePlansAPI/${findOp.Mobikwik_Operator_code}/${findCir.Mobikwik_circlecode}`,
      {
        headers: {
          "X-Mclient": "14",
        },
      }
    );

    // if error
    if (!plans.data.success) {
      res.status(400);
      throw new Error("Errors in Plan Fetching");
    }

    // const Plans = await plans.data.

    // success respond
    successHandler(req, res, {
      Remarks: "All plans",
      Data: plans?.data.data.plans,
    });
  } else if (selectedOperator.providerCode === 2) {
    const findOp = All_Recharge_Operator_List.find(
      (a) => a.PlanApi_Operator_code == Operator_Code
    );
    // console.log(findOp, "findOp");
    const findCir = All_Recharge_Circle_List.find(
      (a) => a.planapi_circlecode == Circle_Code
    );
    // console.log(findCir, "findCir");

    const plans = await axios.get(
      `http://planapi.in/api/Mobile/Operatorplan?apimember_id=${process.env.PLAN_API_USER_ID}&api_password=${process.env.PLAN_API_PASSWORD}&cricle=${findCir.planapi_circlecode}&operatorcode=${findOp.PlanApi_Operator_code}`
    );
    // console.log(plans.data, "plans");
    // if error
    if (plans.data.STATUS != 0) {
      res.status(400);
      throw new Error("Errors in Plan Fetching");
    }

    const flattenRDATA = (data) => {
      let result = [];
      for (let key in data) {
        if (Array.isArray(data[key])) {
          result = result.concat(data[key]);
        }
      }
      return result;
    };

    const flattenedArray = flattenRDATA(plans?.data.RDATA);

    if (["Airtel", "VI"].includes(findOp.Operator_name)) {
      // Fetch ROFFER data
      const rofferResponse = await axios.get(
        `http://planapi.in/api/Mobile/RofferCheck?apimember_id=${process.env.PLAN_API_USER_ID}&api_password=${process.env.PLAN_API_PASSWORD}&operator_code=${findOp.PlanApi_Operator_code}&mobile_no=${MobileNumber}`
      );

      // console.log(rofferResponse.data, "rofferResponse");

      const rofferData = rofferResponse.data.RDATA.map((roffer) => ({
        Type: "roffer",
        rs: parseInt(roffer.price, 10), // Ensure price is numeric
        validity: "N/A",
        desc: `${roffer.logdesc} | ${roffer.ofrtext}`,
      }));

      // Create a map for ROFFER data based on 'rs' (price)
      const rofferMap = new Map(
        rofferData.map((roffer) => [roffer.rs, roffer])
      );

      // Replace overlapping plans and combine unique ROFFER plans
      const mergedPlans = flattenedArray.map((plan) =>
        rofferMap.has(plan.rs) ? rofferMap.get(plan.rs) : plan
      );

      rofferData.forEach((roffer) => {
        if (!mergedPlans.some((plan) => plan.rs === roffer.rs)) {
          mergedPlans.push(roffer); // Add unique ROFFER plans
        }
      });

      // success respond
      successHandler(req, res, {
        Remarks: "All plans",
        Data: (mergedPlans),
      });
    } else {
      successHandler(req, res, {
        Remarks: "All plans",
        Data: (flattenedArray),
      });
    }
  }
});
const BillhubComplainRaise = asyncHandler(async (req, res) => {
  try {
    const { order_id, message } = req.query;
    const response = await axios.get(
      `https://api.billhub.in/reseller/complaint/?token=${process.env.BILLHUB_TOKEN}&order_id=${order_id}&message=${message}`
    );

    // success respond
    successHandler(req, res, {
      Remarks: "Complained Raised",
      Data: response?.data,
    });
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
});

// recharge request
// const rechargeRequest = asyncHandler(async (req, res) => {
//   try {
//     const findService = await Service.findOne({ name: "Recharge" });
//     const ipAddress = getIpAddress(req);
//     if (!findService?.status) {
//       res.status(400);
//       throw new Error("Recharge Service Down");
//     }

//     const { _id, deviceToken } = req.data;
//     const FindUser = await Users.findOne({ _id });

//     if (!FindUser.status) {
//       res.status(400);
//       throw new Error("User is Blocked");
//     }

//     if (!FindUser?.recharge) {
//       res.status(400);
//       throw new Error("Recharge Service Down.");
//     }

//     const { number, operator, circle, amount, transactionId, mPin } = req.query;
//     let isPrepaid = req.query.isPrepaid === "true";

//     if (Number(amount) <= 0) {
//       res.status(400);
//       throw new Error("Amount should be positive.");
//     }

//     if (!req.data.mPin) {
//       res.status(400);
//       throw new Error("Please set an mPin.");
//     }

//     // Decrypt mPin
//     const decryptMpin = CryptoJS.AES.decrypt(
//       req.data.mPin,
//       CRYPTO_SECRET
//     ).toString(CryptoJS.enc.Utf8);

//     if (mPin.toString() !== decryptMpin) {
//       res.status(400);
//       throw new Error("Please enter a valid mPin.");
//     }

//     const walletFound = await Wallet.findOne({ userId: _id });

//     if (walletFound.balance < Number(amount)) {
//       res.status(400);
//       throw new Error("User wallet balance is low.");
//     }

//     // Find Operator and Circle
//     const findOperator = All_Recharge_Operator_List.find(
//       (a) => a.Cyrus_Operator_code == operator
//     );
//     const findCircle = All_Recharge_Circle_List.find(
//       (a) => a.cyrus_circlecode == circle
//     );

//     if (!findCircle?.a1_circlecode || !findOperator?.A1_Operator_code) {
//       res.status(400);
//       throw new Error("Invalid Operator or Circle.");
//     }

//     // Wallet Deduction Start -------------------
//     const body = {
//       orderId: generateOrderId(),
//       txnAmount: amount,
//       txnId: transactionId,
//       serviceId: findService._id,
//       mPin,
//       userId: _id,
//       ipAddress,
//     };
//     const res1 = await paywithWallet({ body });

//     // Wallet Deduction End --------------------------
//     if (res1.ResponseStatus == 1) {
//       const selectedOperator = await rechargeApiProviderSchema.findOne({
//         isTrue: true,
//       });
//       function capitalize(word) {
//         if (!word) return ""; // अगर स्ट्रिंग खाली हो
//         return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
//       }

//       if (selectedOperator.providerCode == 1) {
//         // A1 Topup
//         if (!findCircle.a1_circlecode) {
//           res.status(400);
//           throw new Error("This Circle is Not Available");
//         }
//         if (!findOperator.A1_Operator_code) {
//           res.status(400);
//           throw new Error("This Operator is Not Available");
//         }
//         const rechargeRe = await axios.get(
//           `https://business.a1topup.com/recharge/api?username=${process.env.A1_TOPUP_USERNAME}&pwd=123&circlecode=${findCircle.a1_circlecode}&operatorcode=${findOperator.A1_Operator_code}&number=${number}&amount=${amount}&orderid=${transactionId}&format=json`
//         );
//         //         sendEmail(
//         //   {
//         //     phone: rechargeRe.data.status,
//         //     firstName: rechargeRe.data.status,
//         //   },
//         //   "USER_CONGRATES"
//         // );

//         const status = rechargeRe.data.status?.toLowerCase();
//         if (["success", "pending", "accepted"].includes(status)) {
//           const newRecharge = new Recharge({
//             userId: _id,
//             number,
//             operator: findOperator.Cyrus_Operator_code,
//             circle: findCircle.cyrus_circlecode,
//             amount,
//             transactionId,
//             status: rechargeRe.data.status,
//             operatorRef: rechargeRe.data.opid || 0,
//             apiTransID: rechargeRe.data.txid || 0,
//             ipAddress,
//             provider: "A1 Topup",
//             isPrepaid,
//           });
//           await newRecharge.save();
//           const notification = {
//             title: `Recharge ${status}`,
//             body: `Your â‚¹${amount} recharge is ${status}`,
//           };

//           const newNotification = new Notification({
//             ...notification,
//             recipient: _id,
//           });
//           await newNotification.save();

//           if (deviceToken) {
//             sendNotification(notification, deviceToken);
//           }

//           // Start Cashback--------------------------
//           if (status == "success" && isPrepaid) {
//             const findRechargeOperator = await RechargeOperator.findOne({
//               serviceId: findService._id,
//             });
//             if (!findRechargeOperator) {
//               throw new Error("Recharge operator or operator data not found.");
//             }
//             let findPercent;
//             const operatorMapping = {
//               A: findRechargeOperator.airtel,
//               RC: findRechargeOperator.jio,
//               V: findRechargeOperator.vi,
//               BT: findRechargeOperator.bsnl,
//             };
//             findPercent = operatorMapping[findOperator.A1_Operator_code] || 0; // Default 0 if not found
//             const cashbackPercent = (parseInt(amount) / 100) * findPercent;
//             await handleCashback(
//               FindUser,
//               cashbackPercent,
//               transactionId,
//               ipAddress,
//               walletFound
//             );
//           }

//           // End Cashback ---------------------------

//           sendEmail(req.data, "SERVICE_RECEIPT", {
//             ...newRecharge,
//             operatorName: findOperator?.Operator_name,
//             serviceName: "Mobile Recharge",
//           });

//         //   const value = {
//         //     operatorName: findOperator?.Operator_name,
//         //     serviceName: "Mobile Recharge",
//         //     TransID: transactionId,
//         //     currentDate: new Date(), // Get the current date
//         //     number: number,
//         //     amount: amount,
//         //     operatorRef: rechargeRe.data.opid,
//         //   };

//         //   const doc = createHtmlToPdf(req.data, value);

//         //   newRecharge.receipt = doc;
//         //   await newRecharge.save();

//           // Success response
//           successHandler(req, res, {
//             Remarks: rechargeRe?.data?.ErrorMessage,
//             Data: encryptFunc({ status: capitalize(status) }),
//           });
//         }
//         if (["failure", "error"].includes(status)) {
//           // Start Refund-------------------------------------------------
//           await handleRefund(
//             FindUser,
//             amount,
//             transactionId,
//             ipAddress,
//             walletFound
//           );
//           // End Refund ------------------------------------------------------------------
//           res.status(400);
//           throw new Error(rechargeRe.data.message || rechargeRe.data.opid);
//         }
//       } else if (selectedOperator.providerCode === 2) {
//         // Billhub
//         if (!findCircle.planapi_circlecode) {
//           res.status(400);
//           throw new Error("This Circle is Not Available");
//         }
//         if (!findOperator.Billhub_Operator_code) {
//           res.status(400);
//           throw new Error("This Operator is Not Available");
//         }

//         const rechargeRe = await axios.get(
//           `https://api.billhub.in/reseller/recharge/?token=${
//             process.env.BILLHUB_TOKEN
//           }&op_uid=${
//             findOperator.Billhub_Operator_code
//           }&order_id=${transactionId}&type=${
//             isPrepaid ? "prepaid" : "postpaid"
//           }&number=${number}&amount=${amount}&circle=${
//             findCircle.planapi_circlecode
//           }`
//         );

//         const status = rechargeRe.data.status?.toLowerCase();
//         if (["success", "pending", "accepted"].includes(status)) {
//           const newRecharge = new Recharge({
//             userId: _id,
//             number,
//             operator: findOperator.Cyrus_Operator_code,
//             circle: findCircle.cyrus_circlecode,
//             amount,
//             transactionId,
//             status: rechargeRe.data.status,
//             operatorRef: rechargeRe.data.operator_ref_id || 0,
//             apiTransID: rechargeRe.data.order_id || 0,
//             ipAddress,
//             provider: "Billhub",
//             isPrepaid,
//           });
//           await newRecharge.save();
//           const notification = {
//             title: `Recharge ${status}`,
//             body: `Your ₹${amount} recharge is ${status}`,
//           };

//           const newNotification = new Notification({
//             ...notification,
//             recipient: _id,
//           });
//           await newNotification.save();

//           if (deviceToken) {
//             sendNotification(notification, deviceToken);
//           }

//           // Start Cashback--------------------------
//           if (status == "success" && isPrepaid) {
//             const findRechargeOperator = await RechargeOperator.findOne({
//               serviceId: findService._id,
//             });
//             if (!findRechargeOperator) {
//               throw new Error("Recharge operator or operator data not found.");
//             }
//             let findPercent;
//             const operatorMapping = {
//               airtel: findRechargeOperator.airtel,
//               jio: findRechargeOperator.jio,
//               vi: findRechargeOperator.vi,
//               bsnl_topup: findRechargeOperator.bsnl,
//             };
//             findPercent =
//               operatorMapping[findOperator.Billhub_Operator_code] || 0; // Default 0 if not found
//             const cashbackPercent = (parseInt(amount) / 100) * findPercent;
//             await handleCashback(
//               FindUser,
//               cashbackPercent,
//               transactionId,
//               ipAddress,
//               walletFound
//             );
//           }

//           // End Cashback ---------------------------

//           sendEmail(req.data, "SERVICE_RECEIPT", {
//             ...newRecharge,
//             operatorName: findOperator?.Operator_name,
//             serviceName: "Mobile Recharge",
//           });

//         //   const value = {
//         //     operatorName: findOperator?.Operator_name,
//         //     serviceName: "Mobile Recharge",
//         //     TransID: transactionId,
//         //     currentDate: new Date(), // Get the current date
//         //     number: number,
//         //     amount: amount,
//         //     operatorRef: rechargeRe.data.operator_ref_id,
//         //   };

//         //   const doc = createHtmlToPdf(req.data, value);

//         //   newRecharge.receipt = doc;
//         //   await newRecharge.save();

//           // Success response
//           successHandler(req, res, {
//             Remarks: `Your Recharge is ${status}`,
//             Data: encryptFunc({ status: capitalize(status) }),
//           });
//         }

//         if (["failure", "error", "failed"].includes(status)) {
//           // Start Refund-------------------------------------------------
//           await handleRefund(
//             FindUser,
//             amount,
//             transactionId,
//             ipAddress,
//             walletFound
//           );
//           // End Refund ------------------------------------------------------------------
//           res.status(400);
//           throw new Error("Recharge Failed, Please Try Again");
//         }
//       }
//     } else {
//       res.status(400);
//       throw new Error("Payment Failed, Please Contact to Customer Care");
//     }
//   } catch (error) {
//     res.status(400);
//     throw new Error(error.message);
//   }
// });

// const rechargeRequest = asyncHandler(async (req, res) => {
//   try {
//     const { _id, deviceToken } = req.data;
//     const ipAddress = getIpAddress(req);
//     const { number, amount, mPin } = req.query;
//     const isPrepaid = Boolean(req.query.isPrepaid);
//     const TxnAmount = Number(amount);

//     const [findService, FindUser, walletFound] = await Promise.all([
//       Service.findOne({ name: "Recharge" }),
//       Users.findOne({ _id }),
//       Wallet.findOne({ userId: _id }),
//     ]);

//     if (!findService?.status) {
//       res.status(400);
//       throw new Error("Recharge Service Down");
//     }

//     if (!FindUser.status) {
//       res.status(400);
//       throw new Error("User is Blocked");
//     }

//     if (!FindUser?.recharge) {
//       res.status(400);
//       throw new Error("Recharge Service Down.");
//     }

//     if (TxnAmount <= 0) {
//       res.status(400);
//       throw new Error("Amount should be positive.");
//     }

//     if (!req.data.mPin) {
//       res.status(400);
//       throw new Error("Please set an mPin.");
//     }

//     // Decrypt mPin
//     const decryptMpin = CryptoJS.AES.decrypt(
//       req.data.mPin,
//       CRYPTO_SECRET
//     ).toString(CryptoJS.enc.Utf8);

//     if (mPin.toString() !== decryptMpin) {
//       res.status(400);
//       throw new Error("Please enter a valid mPin.");
//     }
//     if (walletFound.balance < TxnAmount) {
//       res.status(400);
//       throw new Error("User wallet balance is low.");
//     }

//     // Fetch OPerator & Circle

//     const RESPONSE_OPERATOR = await axios.get(
//       `http://planapi.in/api/Mobile/OperatorFetchNew`,
//       {
//         params: {
//           ApiUserID: process.env.PLAN_API_USER_ID,
//           ApiPassword: "123",
//           Mobileno: number,
//         },
//       }
//     );
//     if (RESPONSE_OPERATOR.data.STATUS == 1) {
//       const findOperator = All_Recharge_Operator_List.find(
//         (a) => a.PlanApi_Operator_code == RESPONSE_OPERATOR.data.OpCode
//       );

//       const findCircle = All_Recharge_Circle_List.find(
//         (a) => a.planapi_circlecode == RESPONSE_OPERATOR.data.CircleCode
//       );

//       if (
//         !findCircle?.planapi_circlecode ||
//         !findOperator?.PlanApi_Operator_code ||

//         !findOperator.A1_Operator_code
//       ) {
//         res.status(400);
//         throw new Error("Invalid Operator or Circle.");
//       }

//       const transactionId = generateOrderId();
//       const body = {
//         orderId: transactionId,
//         txnAmount: TxnAmount,
//         txnId: transactionId,
//         serviceId: findService._id,
//         mPin,
//         userId: FindUser._id,
//         ipAddress,
//       };
//       const res1 = await paywithWallet({ body });
//       if (res1.ResponseStatus == 1) {
//         const selectedOperator = await rechargeApiProviderSchema.findOne({
//           isTrue: true,
//         });
//         function capitalize(word) {
//           if (!word) return ""; // अगर स्ट्रिंग खाली हो
//           return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
//         }
//         if (selectedOperator.providerCode == 1) {
//           // A1 Topup
//           const rechargeRe = await axios.get(
//             `https://business.a1topup.com/recharge/api?username=${process.env.A1_TOPUP_USERNAME}&pwd=123&circlecode=${findCircle.planapi_circlecode}&operatorcode=${findOperator.A1_Operator_code}&number=${number}&amount=${TxnAmount}&orderid=${transactionId}&format=json`
//           );
//           const status = rechargeRe.data.status?.toLowerCase();
//           if (!status) {
//                           sendEmail(
//               {
//                 phone: "Status nhi aya",
//                 firstName: `Status : ${status}`,
//               },
//               "USER_CONGRATES"
//             );
//               // Start Refund-------------------------------------------------
//             // await handleRefund(
//             //   FindUser,
//             //   TxnAmount,
//             //   transactionId,
//             //   ipAddress,
//             //   walletFound
//             // );
//             // End Refund
//             res.status(400);
//             throw new Error(`Technical Issue : ${rechargeRe.data}`);
//           }

//           const newRecharge = new Recharge({
//             userId: FindUser._id,
//             number,
//             operator: findOperator.PlanApi_Operator_code,
//             circle: findCircle.planapi_circlecode,
//             amount: TxnAmount,
//             transactionId,
//             status: status,
//             operatorRef: rechargeRe.data.opid || 0,
//             apiTransID: rechargeRe.data.txid || 0,
//             ipAddress,
//             provider: "A1 Topup",
//             isPrepaid,
//           });
//           await newRecharge.save();

//           if (["failure", "error", "failed"].includes(status)) {
//             // Start Refund-------------------------------------------------
//             await handleRefund(
//               FindUser,
//               TxnAmount,
//               transactionId,
//               ipAddress,
//               walletFound
//             );
//             // End Refund ------------------------------------------------------------------
//             res.status(400);
//             throw new Error(rechargeRe.data.message || rechargeRe.data.opid);
//           }

//           // Start Cashback--------------------------
//           if (status == "success" && isPrepaid) {
//             const findRechargeOperator = await RechargeOperator.findOne({
//               serviceId: findService._id,
//             });
//             if (!findRechargeOperator) {
//               throw new Error("Recharge operator or operator data not found.");
//             }
//             let findPercent;
//             const operatorMapping = {
//               A: findRechargeOperator.airtel,
//               RC: findRechargeOperator.jio,
//               V: findRechargeOperator.vi,
//               BT: findRechargeOperator.bsnl,
//             };
//             findPercent = operatorMapping[findOperator.A1_Operator_code] || 0; // Default 0 if not found
//             const cashbackPercent = (TxnAmount / 100) * findPercent;
//             await handleCashback(
//               FindUser,
//               cashbackPercent,
//               transactionId,
//               ipAddress,
//               walletFound
//             );
//           }
//           // End Cashback ---------------------------
//           const notification = {
//             title: `Recharge ${status}`,
//             body: `Your ₹${TxnAmount} recharge is ${status}`,
//           };
//           const newNotification = new Notification({
//             ...notification,
//             recipient: _id,
//           });
//           await newNotification.save();
//           if (deviceToken) {
//             sendNotification(notification, deviceToken);
//           }

//           sendEmail(req.data, "SERVICE_RECEIPT", {
//             ...newRecharge,
//             operatorName: findOperator?.Operator_name,
//             serviceName: "Mobile Recharge",
//           });
//           //   const value = {
//           //     operatorName: findOperator?.Operator_name,
//           //     serviceName: "Mobile Recharge",
//           //     TransID: transactionId,
//           //     currentDate: new Date(), // Get the current date
//           //     number: number,
//           //     amount: amount,
//           //     operatorRef: rechargeRe.data.opid,
//           //   };
//           //   const doc = createHtmlToPdf(req.data, value);
//           //   newRecharge.receipt = doc;
//           //   await newRecharge.save();
//           // Success response
//           successHandler(req, res, {
//             Remarks: rechargeRe?.data?.ErrorMessage,
//             Data: encryptFunc({ status: capitalize(status) }),
//           });
//         } else if (selectedOperator.providerCode === 2) {
//           // Billhub

//           const rechargeRe = await axios.get(
//             `https://api.billhub.in/reseller/recharge/?token=${
//               process.env.BILLHUB_TOKEN
//             }&op_uid=${
//               findOperator.Billhub_Operator_code
//             }&order_id=${transactionId}&type=${
//               isPrepaid ? "prepaid" : "postpaid"
//             }&number=${number}&amount=${TxnAmount}&circle=${
//               findCircle.planapi_circlecode
//             }`
//           );
//           const status = rechargeRe.data.status?.toLowerCase();

//           if (!status) {
//                           sendEmail(
//               {
//                 phone: "Status nhi aya",
//                 firstName: `Status : ${status}`,
//               },
//               "USER_CONGRATES"
//             );
//             res.status(400);
//             throw new Error(
//               `Technical Issue Status : ${rechargeRe.data.status}`
//             );
//           }
//           const newRecharge = new Recharge({
//             userId: FindUser._id,
//             number,
//             operator: findOperator.PlanApi_Operator_code,
//             circle: findCircle.planapi_circlecode,
//             amount: TxnAmount,
//             transactionId,
//             status: status || "ERROR",
//             operatorRef: rechargeRe.data.operator_ref_id || 0,
//             apiTransID: rechargeRe.data.order_id || 0,
//             ipAddress,
//             provider: "Billhub",
//             isPrepaid,
//           });
//           await newRecharge.save();

//           if (["failed"].includes(status)) {
//             // Start Refund-------------------------------------------------
//             await handleRefund(
//               FindUser,
//               TxnAmount,
//               transactionId,
//               ipAddress,
//               walletFound
//             );
//             // End Refund ------------------------------------------------------------------
//             res.status(400);
//             throw new Error("Recharge Failed, Please Try Again");
//           }

//           // Start Cashback--------------------------
//           if (status == "success" && isPrepaid) {
//             const findRechargeOperator = await RechargeOperator.findOne({
//               serviceId: findService._id,
//             });
//             if (!findRechargeOperator) {
//               throw new Error("Recharge operator or operator data not found.");
//             }
//             let findPercent;
//             const operatorMapping = {
//               airtel: findRechargeOperator.airtel,
//               jio: findRechargeOperator.jio,
//               vi: findRechargeOperator.vi,
//               bsnl_topup: findRechargeOperator.bsnl,
//             };
//             findPercent =
//               operatorMapping[findOperator.Billhub_Operator_code] || 0; // Default 0 if not found
//             const cashbackPercent = (TxnAmount / 100) * findPercent;
//             await handleCashback(
//               FindUser,
//               cashbackPercent,
//               transactionId,
//               ipAddress,
//               walletFound
//             );
//           }
//           // End Cashback ---------------------------
//           const notification = {
//             title: `Recharge ${status}`,
//             body: `Your ₹${TxnAmount} recharge is ${status}`,
//           };
//           const newNotification = new Notification({
//             ...notification,
//             recipient: _id,
//           });
//           await newNotification.save();
//           if (deviceToken) {
//             sendNotification(notification, deviceToken);
//           }

//           sendEmail(req.data, "SERVICE_RECEIPT", {
//             ...newRecharge,
//             operatorName: findOperator?.Operator_name,
//             serviceName: "Mobile Recharge",
//           });
//           //   const value = {
//           //     operatorName: findOperator?.Operator_name,
//           //     serviceName: "Mobile Recharge",
//           //     TransID: transactionId,
//           //     currentDate: new Date(), // Get the current date
//           //     number: number,
//           //     amount: amount,
//           //     operatorRef: rechargeRe.data.operator_ref_id,
//           //   };
//           //   const doc = createHtmlToPdf(req.data, value);
//           //   newRecharge.receipt = doc;
//           //   await newRecharge.save();
//           // Success response
//           successHandler(req, res, {
//             Remarks: `Your Recharge is ${status}`,
//             Data: encryptFunc({ status: capitalize(status) }),
//           });
//         }
//       } else {
//         res.status(400);
//         throw new Error("Payment Failed, Please Contact to Customer Care");
//       }
//     } else {
//       res.status(400);
//       throw new Error(`Technical Issue in OPT Fetch Detail ${RESPONSE_OPERATOR.data.STATUS}`);
//     }
//   } catch (error) {
//     res.status(400);
//     throw new Error(error.message);
//   }
// });

// Error Codes
// Ex100 - Service Down
// Ex150 - Perticular User Service Down
// Ex200 - Validation Error Mobikwik

const rechargeRequest = asyncHandler(async (req, res) => {
  try {
    const { _id, deviceToken } = req.data;
    const ipAddress = getIpAddress(req);
    const { number, amount, mPin, operator, circle } = req.query;
    const isPrepaid = Boolean(req.query.isPrepaid);
    const TxnAmount = Number(amount);

    const [findService, FindUser, walletFound] = await Promise.all([
      Service.findOne({ name: "Recharge" }),
      Users.findOne({ _id }),
      Wallet.findOne({ userId: _id }),
    ]);

    if (!findService?.status) {
      res.status(400);
      throw new Error("Recharge Failed, Please Try Again Ex100");
    }

    if (!FindUser.status) {
      res.status(400);
      throw new Error("User is Blocked");
    }

    if (!FindUser?.recharge) {
      res.status(400);
      throw new Error("Recharge Failed, Please Try Again Ex150");
    }

    if (TxnAmount <= 0) {
      res.status(400);
      throw new Error("Amount should be positive.");
    }

    if (!req.data.mPin) {
      res.status(400);
      throw new Error("Please set an mPin.");
    }

    // Decrypt mPin
    const decryptMpin = CryptoJS.AES.decrypt(
      req.data.mPin,
      CRYPTO_SECRET
    ).toString(CryptoJS.enc.Utf8);

    if (mPin.toString() !== decryptMpin) {
      res.status(400);
      throw new Error("Please enter a valid mPin.");
    }
    if (walletFound.balance < TxnAmount) {
      res.status(400);
      throw new Error("User wallet balance is low.");
    }

    // Fetch OPerator & Circle

    const findOperator = All_Recharge_Operator_List.find(
      (a) => a.PlanApi_Operator_code == operator
    );

    const findCircle = All_Recharge_Circle_List.find(
      (a) => a.planapi_circlecode == circle
    );

    if (
      !findCircle?.planapi_circlecode ||
      !findOperator?.PlanApi_Operator_code
    ) {
      res.status(400);
      throw new Error("Invalid Operator or Circle.");
    }

    const transactionId = generateOrderId();
    const body = {
      orderId: transactionId,
      txnAmount: TxnAmount,
      txnId: transactionId,
      serviceId: findService._id,
      mPin,
      userId: FindUser._id,
      ipAddress,
    };
    const res1 = await paywithWallet({ body });
    if (res1.ResponseStatus == 1) {
      const selectedOperator = await rechargeApiProviderSchema.findOne({
        isTrue: true,
      });
      function capitalize(word) {
        if (!word) return ""; // अगर स्ट्रिंग खाली हो
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }
      if (selectedOperator.providerCode == 1) {
        // A1 Topup
        const newRecharge = new Recharge({
          userId: FindUser._id,
          number,
          operator: findOperator.PlanApi_Operator_code,
          circle: findCircle.planapi_circlecode,
          amount: TxnAmount,
          transactionId,
          status: "pending",
          operatorRef: 0,
          apiTransID: 0,
          ipAddress,
          provider: "A1Topup",
          isPrepaid,
        });
        await newRecharge.save();

        try {
          const URL = `https://business.a1topup.com/recharge/api?username=${process.env.A1_TOPUP_USERNAME}&pwd=123&circlecode=${findCircle.planapi_circlecode}&operatorcode=${findOperator.A1_Operator_code}&number=${number}&amount=${TxnAmount}&orderid=${transactionId}&format=json`;

          await saveLog(
            "MOBILE_RECHARGE",
            "https://business.a1topup.com/recharge/api",
            URL, // or full request payload
            null,
            `Recharge initiated for TxnID: ${transactionId}`
          );

          const rechargeRe = await axios.get(URL);

          await saveLog(
            "MOBILE_RECHARGE",
            "https://business.a1topup.com/recharge/api",
            URL, // or full request payload
            rechargeRe.data,
            `Recharge response received for TxnID: ${transactionId}, Status: ${rechargeRe.data.status}`
          );

          newRecharge.rawResponse = rechargeRe.data;
          newRecharge.status = rechargeRe.data.status?.toLowerCase();
          newRecharge.operatorRef = rechargeRe.data.opid || 0;
          newRecharge.apiTransID = rechargeRe.data.txid || 0;
          await newRecharge.save();
          const status = rechargeRe.data.status?.toLowerCase();

          if (["failure", "error", "failed"].includes(status)) {
            // Start Refund-------------------------------------------------
            await handleRefund(
              FindUser,
              TxnAmount,
              transactionId,
              ipAddress,
              walletFound
            );
            // End Refund ------------------------------------------------------------------
            res.status(400);
            throw new Error(rechargeRe.data.message || rechargeRe.data.opid);
          }

          // Start Cashback--------------------------
          if (status == "success" && isPrepaid) {
            const findRechargeOperator = await RechargeOperator.findOne({
              serviceId: findService._id,
            });
            if (!findRechargeOperator) {
              throw new Error("Recharge operator or operator data not found.");
            }
            let findPercent;
            const operatorMapping = {
              A: findRechargeOperator.airtel,
              RC: findRechargeOperator.jio,
              V: findRechargeOperator.vi,
              BT: findRechargeOperator.bsnl,
            };
            findPercent = operatorMapping[findOperator.A1_Operator_code] || 0; // Default 0 if not found
            const cashbackPercent = (TxnAmount / 100) * findPercent;
            await handleCashback(
              FindUser,
              cashbackPercent,
              transactionId,
              ipAddress,
              walletFound
            );
          }
          // End Cashback ---------------------------
          const notification = {
            title: `Recharge ${status}`,
            body: `Your ₹${TxnAmount} recharge is ${status}`,
          };
          const newNotification = new Notification({
            ...notification,
            recipient: _id,
          });
          await newNotification.save();
          if (deviceToken) {
            sendNotification(notification, deviceToken);
          }

          // Success response
          successHandler(req, res, {
            Remarks: rechargeRe?.data?.ErrorMessage,
            Data: ({
              status: capitalize(status),
              operator_ref_id: rechargeRe?.data.opid,
            }),
          });
        } catch (error) {
          if (error.code === "ECONNABORTED") {
            // Timeout Error Handling
            newRecharge.status = "pending";
            newRecharge.rawResponse = "Request timed out";
            await newRecharge.save();

            await saveLog(
              "MOBILE_RECHARGE",
              null,
              null, // or full request payload
              error?.response?.data || error.message,
              `Request timed out for TxnID: ${transactionId}`
            );

            successHandler(req, res, {
              Remarks: `Your Recharge is Pending`,
              Data: ({ status: "PENDING" }),
            });
          } else {
            // Other Errors
            newRecharge.status = "error";
            newRecharge.rawResponse = error.message;
            await newRecharge.save();
            await saveLog(
              "MOBILE_RECHARGE",
              null,
              null, // or full request payload
              error?.response?.data || error.message,
              `Error during recharge for TxnID: ${transactionId}`
            );
            res.status(400);
            throw new Error(error.message);
          }
        }

        // A1 Topup
      } else if (selectedOperator.providerCode === 2) {
        // Billhub

        const newRecharge = new Recharge({
          userId: FindUser._id,
          number,
          operator: findOperator.PlanApi_Operator_code,
          circle: findCircle.planapi_circlecode,
          amount: TxnAmount,
          transactionId,
          status: "pending",
          operatorRef: 0,
          apiTransID: transactionId,
          ipAddress,
          provider: "Billhub",
          isPrepaid,
        });
        await newRecharge.save();
        try {
          const URL = `https://api.billhub.in/reseller/recharge/?token=${
            process.env.BILLHUB_TOKEN
          }&op_uid=${
            findOperator.Billhub_Operator_code
          }&order_id=${transactionId}&type=${
            isPrepaid ? "prepaid" : "postpaid"
          }&number=${number}&amount=${TxnAmount}&circle=${
            findCircle.planapi_circlecode
          }`;
          await saveLog(
            "MOBILE_RECHARGE",
            "https://api.billhub.in/reseller/recharge",
            URL, // or full request payload
            null,
            `Recharge initiated for TxnID: ${transactionId}`
          );
          const rechargeRe = await axios.get(URL);
          // console.log(rechargeRe.data, "rechargeRe");
          await saveLog(
            "MOBILE_RECHARGE",
            "https://api.billhub.in/reseller/recharge",
            URL, // or full request payload
            rechargeRe.data,
            `Recharge response received for TxnID: ${transactionId}, Status: ${rechargeRe.data.status}`
          );

          if (!rechargeRe.data) {
            successHandler(req, res, {
              Remarks: `Your Recharge is Pending`,
              Data: ({
                status: "PENDING",
                operator_ref_id: rechargeRe.data.operator_ref_id || 0,
              }),
            });
          }

          newRecharge.rawResponse = rechargeRe.data;
          await newRecharge.save();
          newRecharge.status = rechargeRe.data.status?.toLowerCase();
          newRecharge.operatorRef = rechargeRe.data.operator_ref_id || 0;
          await newRecharge.save();
          const status = rechargeRe.data.status?.toLowerCase();
          if (status == "failed") {
            // Start Refund-------------------------------------------------
            await handleRefund(
              FindUser,
              TxnAmount,
              transactionId,
              ipAddress,
              walletFound
            );
            // End Refund ------------------------------------------------------------------
            res.status(400);
            throw new Error("Recharge Failed, Please Try Again");
          }

          // Start Cashback--------------------------
          if (status == "success" && isPrepaid) {
            const findRechargeOperator = await RechargeOperator.findOne({
              serviceId: findService._id,
            });
            if (!findRechargeOperator) {
              throw new Error("Recharge operator or operator data not found.");
            }
            let findPercent;
            const operatorMapping = {
              airtel: findRechargeOperator.airtel,
              jio: findRechargeOperator.jio,
              vi: findRechargeOperator.vi,
              bsnl_topup: findRechargeOperator.bsnl,
            };
            findPercent =
              operatorMapping[findOperator.Billhub_Operator_code] || 0; // Default 0 if not found
            const cashbackPercent = (TxnAmount / 100) * findPercent;
            await handleCashback(
              FindUser,
              cashbackPercent,
              transactionId,
              ipAddress,
              walletFound
            );
          }
          // End Cashback ---------------------------
          const notification = {
            title: `Recharge ${status}`,
            body: `Your ₹${TxnAmount} recharge is ${status}`,
          };
          const newNotification = new Notification({
            ...notification,
            recipient: _id,
          });
          await newNotification.save();
          if (deviceToken) {
            sendNotification(notification, deviceToken);
          }

          // Success response
          successHandler(req, res, {
            Remarks: `Your Recharge is ${status}`,
            Data: ({
              status: capitalize(status),
              operator_ref_id: rechargeRe.data.operator_ref_id,
            }),
          });
        } catch (error) {
          if (error.code === "ECONNABORTED") {
            // Timeout Error Handling
            newRecharge.status = "pending";
            newRecharge.rawResponse = "Request timed out";
            await newRecharge.save();

            await saveLog(
              "MOBILE_RECHARGE",
              null,
              null, // or full request payload
              error?.response?.data || error.message,
              `Request timed out for TxnID: ${transactionId}`
            );

            successHandler(req, res, {
              Remarks: `Your Recharge is Pending`,
              Data: ({ status: "PENDING" }),
            });
          } else {
            // Other Errors
            newRecharge.status = "pending";
            newRecharge.rawResponse = error.message;
            await newRecharge.save();
            await saveLog(
              "MOBILE_RECHARGE",
              null,
              null, // or full request payload
              error?.response?.data || error.message,
              `Error during recharge for TxnID: ${transactionId}`
            );
            res.status(400);
            throw new Error(error.message);
          }

          // newRecharge.status = "error";
          // newRecharge.rawResponse = error.message;
          // await newRecharge.save();

          // res.status(400);
          // throw new Error(error.message);
        }
      } else if (selectedOperator.providerCode === 3) {
        // Mobikwik
        const newRecharge = new Recharge({
          userId: FindUser._id,
          number,
          operator: findOperator.PlanApi_Operator_code,
          circle: findCircle.planapi_circlecode,
          amount: TxnAmount,
          transactionId,
          status: "pending",
          operatorRef: 0,
          apiTransID: transactionId,
          ipAddress,
          provider: "Mobikwik",
          isPrepaid,
        });
        await newRecharge.save();
        try {
          // Retailer Validation
          const requestPayload = {
            // adParams: {},
            uid: process.env.MOBIKWIK_UID,
            password: process.env.MOBIKWIK_PASSWORD,
            amt: TxnAmount,
            cir: findCircle.Mobikwik_circlecode,
            cn: number,
            op: findOperator.Mobikwik_Operator_code,
          };

          const retailerValidationResponse = await axios.post(
            `https://${process.env.MOBIKWIK_HOSTNAME}/recharge/v1/retailerValidation`,
            requestPayload,
            {
              headers: {
                "X-MClient": "14",
                "Content-Type": "application/json",
                checkSum: MobikwikCheckSumGenerate(requestPayload),
              },
            }
          );

          if (!retailerValidationResponse.data.success) {
            await saveLog(
              "MOBILE_RECHARGE",
              `https://${process.env.MOBIKWIK_HOSTNAME}/recharge.do`,
              null, // or full request payload
              retailerValidationResponse.data,
              `Recharge Validation Failed for TxnID: ${transactionId}`
            );
            res.status(400);
            throw new Error("Recharge Failed, Please Try Again");
          }

          if (
            retailerValidationResponse.data.data.status ==
            "RECHARGEVALIDATIONSUCCESS"
          ) {
            // Proceed with Recharge
            const URL = `https://${process.env.MOBIKWIK_HOSTNAME}/recharge.do?uid=${process.env.MOBIKWIK_UID}&pwd=${process.env.MOBIKWIK_PASSWORD}&cn=${number}&op=${findOperator.Mobikwik_Operator_code}&cir=${findCircle.Mobikwik_circlecode}&amt=${TxnAmount}&reqid=${transactionId}`;

            await saveLog(
              "MOBILE_RECHARGE",
              `https://${process.env.MOBIKWIK_HOSTNAME}/recharge.do`,
              URL, // or full request payload
              null,
              `Recharge initiated for TxnID: ${transactionId}`
            );
            const mobikwikResponse = await axios.get(URL);
            const rechargeRe = await parseXMLToJSON(
              mobikwikResponse.data,
              "recharge"
            );

            await saveLog(
              "MOBILE_RECHARGE",
              `https://${process.env.MOBIKWIK_HOSTNAME}/recharge.do`,
              URL, // or full request payload
              rechargeRe,
              `Recharge response received for TxnID: ${transactionId}, Status: ${rechargeRe.status}`
            );

            if (!rechargeRe.status == "SUCCESSPENDING") {
              successHandler(req, res, {
                Remarks: `Your Recharge is Pending`,
                Data: ({ status: "PENDING" }),
              });
            }

            newRecharge.rawResponse = rechargeRe;
            await newRecharge.save();
            newRecharge.status =
              rechargeRe.status?.toLowerCase() == "successpending"
                ? "pending"
                : rechargeRe.status?.toLowerCase();
            newRecharge.operatorRef = rechargeRe.opRefNo || 0;
            await newRecharge.save();
            const status =
              rechargeRe.status?.toLowerCase() == "successpending"
                ? "pending"
                : rechargeRe.status?.toLowerCase();
            if (status == "failed" || status == "failure") {
              // Start Refund-------------------------------------------------
              await handleRefund(
                FindUser,
                TxnAmount,
                transactionId,
                ipAddress,
                walletFound
              );
              // End Refund ------------------------------------------------------------------
              res.status(400);
              throw new Error("Recharge Failed, Please Try Again");
            }

            // Start Cashback--------------------------
            if (status == "success" && isPrepaid) {
              const findRechargeOperator = await RechargeOperator.findOne({
                serviceId: findService._id,
              });
              if (!findRechargeOperator) {
                throw new Error(
                  "Recharge operator or operator data not found."
                );
              }
              let findPercent;
              const operatorMapping = {
                airtel: findRechargeOperator.airtel,
                jio: findRechargeOperator.jio,
                vi: findRechargeOperator.vi,
                bsnl_topup: findRechargeOperator.bsnl,
              };
              findPercent =
                operatorMapping[findOperator.Billhub_Operator_code] || 0; // Default 0 if not found
              const cashbackPercent = (TxnAmount / 100) * findPercent;
              await handleCashback(
                FindUser,
                cashbackPercent,
                transactionId,
                ipAddress,
                walletFound
              );
            }
            // End Cashback ---------------------------
            const notification = {
              title: `Recharge ${status}`,
              body: `Your ₹${TxnAmount} recharge is ${status}`,
            };
            const newNotification = new Notification({
              ...notification,
              recipient: _id,
            });
            await newNotification.save();
            if (deviceToken) {
              sendNotification(notification, deviceToken);
            }

            // Success response
            successHandler(req, res, {
              Remarks: `Your Recharge is ${status}`,
              Data: ({
                status: capitalize(status),
                operator_ref_id: rechargeRe.opRefNo || 0,
              }),
            });
          } else {
            res.status(400);
            throw new Error("Recharge Failed, Please Try Again Ex200");
          }
        } catch (error) {
          if (error.code === "ECONNABORTED") {
            // Timeout Error Handling
            newRecharge.status = "pending";
            newRecharge.rawResponse = "Request timed out";
            await newRecharge.save();

            await saveLog(
              "MOBILE_RECHARGE",
              null,
              null, // or full request payload
              error?.response?.data || error.message,
              `Request timed out for TxnID: ${transactionId}`
            );

            successHandler(req, res, {
              Remarks: `Your Recharge is Pending`,
              Data: ({ status: "PENDING", operator_ref_id: 0 }),
            });
          } else {
            // Other Errors
            newRecharge.status = "pending";
            newRecharge.rawResponse = error.message;
            await newRecharge.save();
            await saveLog(
              "MOBILE_RECHARGE",
              null,
              null, // or full request payload
              error?.response?.data || error.message,
              `Error during recharge for TxnID: ${transactionId}`
            );
            res.status(400);
            throw new Error(error.message);
          }
        }
      }
    } else {
      res.status(400);
      throw new Error("Payment Failed, Please Contact to Customer Care");
    }
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
});

const dthRequest = asyncHandler(async (req, res) => {
  const findService = await Service.findOne({ name: "DTH" });
  const ipAddress = getIpAddress(req);
  if (!findService.status) {
    res.status(400);
    throw new Error("DTH Recharge Failed, Please Try Again Ex100");
  }

  const { _id, deviceToken } = req.data;
  const FindUser = await Users.findOne({ _id });
  if (!FindUser.status) {
    res.status(400);
    throw new Error("User is Blocked");
  }

  if (!FindUser.dth) {
    res.status(400);
    throw new Error("DTH Recharge Failed, Please Try Again Ex150");
  }
  const { number, operator, amount, transactionId, mPin } = req.query;
  // let isPrepaid = req.query.isPrepaid === "true";
  if (Number(amount) <= 0) {
    res.status(400);
    throw new Error("Amount should be positive.");
  }

  if (!req.data.mPin) {
    res.status(400);
    throw new Error("Please set an mPin.");
  }

  // Decrypt mPin
  const decryptMpin = CryptoJS.AES.decrypt(
    req.data.mPin,
    CRYPTO_SECRET
  ).toString(CryptoJS.enc.Utf8);

  if (mPin.toString() !== decryptMpin) {
    res.status(400);
    throw new Error("Please enter a valid mPin.");
  }

  const walletFound = await Wallet.findOne({ userId: _id });
  if (walletFound.balance < Number(amount)) {
    res.status(400);
    throw new Error("User wallet balance is low.");
  }

  try {
    const body = {
      orderId: generateOrderId(),
      txnAmount: amount,
      txnId: transactionId,
      serviceId: findService._id,
      mPin,
      userId: _id,
      ipAddress,
    };
    const res1 = await paywithWallet({ body });

    // Wallet Deduction End --------------------------

    if (res1.ResponseStatus === 1) {
      const findOperator = All_DTH_Recharge_Operator_List.find(
        (a) => a.Mobikwik_Operator_code == operator
      );
      // const URL = `https://business.a1topup.com/recharge/api?username=${
      //   process.env.A1_TOPUP_USERNAME
      // }&pwd=123&circlecode=${null}&operatorcode=${operator}&number=${number}&amount=${amount}&orderid=${transactionId}&format=json`;
      // console.log(process.env.BILLHUB_TOKEN, "process.env.BILLHUB_TOKEN");
      const URL = `https://api.billhub.in/reseller/recharge/?token=${
        process.env.BILLHUB_TOKEN
      }&op_uid=${
        findOperator.Billhub_Operator_code
      }&order_id=${transactionId}&type=dth&number=${number}&amount=${amount}&circle=${null}`;

      await saveLog(
        "DTH_RECHARGE",
        "https://api.billhub.in/reseller/recharge",
        URL, // or full request payload
        null,
        `Recharge initiated for TxnID: ${transactionId}`
      );

      const rechargeRe = await axios.get(URL);

      await saveLog(
        "DTH_RECHARGE",
        "https://api.billhub.in/reseller/recharge",
        URL, // or full request payload
        rechargeRe.data,
        `Recharge response received for TxnID: ${transactionId}, Status: ${rechargeRe.data.status}`
      );

      const status = rechargeRe.data.status?.toLowerCase();
      if (["failed", "error", "failure"].includes(status)) {
        // Start Refund-------------------------------------------------
        await handleRefund(
          FindUser,
          amount,
          transactionId,
          ipAddress,
          walletFound
        );
        // End Refund ------------------------------------------------------------------
        res.status(400);
        throw new Error(rechargeRe.data.message || rechargeRe.data.opid);
      }

      const newRecharge = new DTH({
        userId: _id,
        number,
        operator,
        amount,
        transactionId,
        status: rechargeRe.data.status,
        operatorRef: rechargeRe.data.operator_ref_id || 0,
        apiTransID: rechargeRe.data.order_id || 0,
        ipAddress,
        provider: "Billhub",
      });
      await newRecharge.save();

      if (["success", "pending", "accepted"].includes(status)) {
        const notification = {
          title: `DTH Recharge ${rechargeRe.data.status}`,
          body: `Your ₹${amount} DTH recharge is ${rechargeRe.data.status}`,
        };

        const newNotification = new Notification({
          ...notification,
          recipient: _id,
        });
        await newNotification.save();

        if (deviceToken) {
          sendNotification(notification, deviceToken);
        }

        // Start Cashback--------------------------

        if (status === "success") {
          const cashbackPercent =
            (parseInt(amount) / 100) * findService.percent;

          await handleCashback(
            FindUser,
            cashbackPercent,
            transactionId,
            ipAddress,
            walletFound
          );
          // End Cashback ---------------------------

          // const findOperator = DTHOperatorArr.find(
          //   (a) => a.OperatorCode == operator
          // );

          //   sendEmail(req.data, "SERVICE_RECEIPT", {
          //     ...newRecharge,
          //     operatorName: findOperator?.OperatorName,
          //     serviceName: "DTH Recharge",
          //   });
          // }

          //   const value = {
          //     operatorName: findOperator?.OperatorName,
          //     serviceName: "DTH Recharge",
          //     TransID: transactionId,
          //     currentDate: new Date(), // Get the current date
          //     number: number,
          //     amount: amount,
          //     operatorRef: rechargeRe.data.opid,
          //   };

          //   const doc = createHtmlToPdf(req.data, value);

          //   newRecharge.receipt = doc;
          //   await newRecharge.save();

          // Success response
          successHandler(req, res, {
            Remarks: rechargeRe?.data?.ErrorMessage,
            Data: (rechargeRe.data),
          });
        }
      } else {
        res.status(400);
        throw new Error("Payment Error, Please Contact to Customer Care");
      }
    }
  } catch (error) {
    await saveLog(
      "DTH_RECHARGE",
      null,
      null, // or full request payload
      error?.response?.data || error.message,
      `Error during recharge for TxnID: ${transactionId}`
    );
    res.status(400);
    throw new Error(error.message);
  }
});
// recharge status
// const rechargeStatus = asyncHandler(async (req, res) => {
//   const { transid } = req.query;

//   const rechargeSt = await axios.get(
//     `${recharge_status}?memberid=${CYRUS_MEMBER_ID}&pin=${CYRUS_PAYMENT_KEY}transid=${transid}`
//   );

//   // if error
//   if (rechargeSt.data.Status != "FAILURE") {
//     // success respond
//     successHandler(req, res, {
//       Remarks: "Recharge request",
//       Data: rechargeSt.data,
//     });
//   } else {
//     res.status(400);
//     throw new Error(rechargeSt?.data?.ErrorMessage);
//   }
// });

// dth info fetch
// const dthInfoFetch = asyncHandler(async (req, res) => {
//   const { MethodName, operator, mobile, offer } = req.query;

//   const dthInfo = await axios.get(
//     `${dth_info_fetch}?MerchantID=${CYRUS_MEMBER_ID}&MerchantKey=${CYRUS_PAYMENT_KEY}MethodName=${MethodName}&operator=${operator}&mobile=${mobile}&offer=${offer}`
//   );

//   // if error
//   if (dthInfo.data.Status != "FAILURE") {
//     // success respond
//     successHandler(req, res, {
//       Remarks: "DTH Info Fetch",
//       Data: dthInfo.data,
//     });
//   } else {
//     res.status(400);
//     throw new Error(dthInfo?.data?.ErrorMessage);
//   }
// });

// recharge history by User
const rechargeHistory = asyncHandler(async (req, res) => {
  const { _id } = req.data;
  const hist = await Recharge.find({ userId: _id }).sort({ createdAt: -1 }); // Sort by createdAt field in descending order

  // success handler
  successHandler(req, res, {
    Remarks: "User Recharge History",
    Data: enryptFunc(hist),
  });
});

// Operator & Circle Fetch by Phone
const Get_Operator_Circle_By_Phone = asyncHandler(async (req, res) => {
  const { phone } = req.query;

  if (!phone) {
    res.status(400);
    throw new Error("Phone Number is Mandatory");
  }

  const response = await axios.get(
    `http://planapi.in/api/Mobile/OperatorFetchNew?ApiUserID=${process.env.PLAN_API_USER_ID}&ApiPassword=${process.env.PLAN_API_PASSWORD}&Mobileno=${phone}`
  );
  if (response.data.STATUS == 3) {
    res.status(400);
    throw new Error(response.data.Message);
  } else {
    successHandler(req, res, {
      Remarks: "Operator & Circle Fetch Success",
      Data: response.data,
    });
  }
});

//  recharge history by admin
const rechargeHistoryByAdmin = asyncHandler(async (req, res) => {
  const page = parseInt(req.body.pageNumber) || 1; // Default page number is 1
  const pageSize = parseInt(req.body.pageSize) || 20; // Default page size is 20
  const searchVal = req.body.search || "";
  const selectVal = req.body.select || "";
  const startDate = new Date(req.body.startDate) || "";
  const endDate = new Date(req.body.endDate) || "";
  const activeTab = req.body.activeTab || "";

  let allRecharges;
  let LastPage;

  if (
    searchVal ||
    selectVal ||
    req.body.startDate ||
    req.body.endDate ||
    activeTab
  ) {
    if (
      selectVal === "phone" ||
      selectVal === "number" ||
      selectVal === "transactionId" ||
      selectVal === "_id"
    ) {
      if (selectVal !== "transactionId" && selectVal !== "number") {
        const FindUser = await Users.findOne({ [selectVal]: searchVal });
        if (FindUser) {
          allRecharges = await Recharge.find({ userId: FindUser._id })
            .sort({ createdAt: -1 })
            .skip((page - 1) * pageSize)
            .limit(pageSize)
            .populate("userId");

          LastPage = Math.ceil(
            (await Recharge.countDocuments({ userId: FindUser._id })) / pageSize
          );
        } else {
          res.status(400);
          throw new Error(`${selectVal} - ${searchVal} is Incorrect`);
        }
      } else {
        allRecharges = await Recharge.find({ [selectVal]: searchVal })
          .sort({ createdAt: -1 })
          .skip((page - 1) * pageSize)
          .limit(pageSize)
          .populate("userId");
        LastPage = Math.ceil(
          (await Recharge.countDocuments({ [selectVal]: searchVal })) / pageSize
        );
      }
    } else if (startDate && endDate && !activeTab) {
      allRecharges = await Recharge.find({
        createdAt: {
          $gte: startDate,
          $lte: endDate,
        },
      })
        .sort({ createdAt: -1 })
        .skip((page - 1) * pageSize)
        .limit(pageSize)
        .populate("userId");

      LastPage = Math.ceil((await Recharge.countDocuments()) / pageSize);
    } else if (activeTab) {
      if (activeTab === "select") {
        allRecharges = await Recharge.find()
          .sort({ createdAt: -1 })
          .skip((page - 1) * pageSize)
          .limit(pageSize)
          .populate("userId");

        LastPage = Math.ceil((await Recharge.countDocuments()) / pageSize);
      } else {
        let statusValues;

        if (activeTab === "Failure") {
          statusValues = ["Failure", "Failed"];
        } else {
          statusValues = [activeTab];
        }

        allRecharges = await Recharge.find({ status: { $in: statusValues } })
          .sort({ createdAt: -1 })
          .skip((page - 1) * pageSize)
          .limit(pageSize)
          .populate("userId");

        LastPage = Math.ceil((await Recharge.countDocuments()) / pageSize);
      }
    }
  } else {
    allRecharges = await Recharge.find()
      .sort({ createdAt: -1 })
      .skip((page - 1) * pageSize)
      .limit(pageSize)
      .populate("userId");

    LastPage = Math.ceil((await Recharge.countDocuments()) / pageSize);
  }

  // const hist = await Recharge.find().populate("userId");
  // success handler
  successHandler(req, res, {
    Remarks: "Fetch Recharge History",
    Data: {
      data: allRecharges,
      lastPage: LastPage,
    },
    // Data: encryptFunc(allRecharges),
  });
});

// recharge history
const dthHistory = asyncHandler(async (req, res) => {
  const { _id } = req.data;
  const hist = await DTH.find({ userId: _id }).sort({ createdAt: -1 });
  // success handler
  successHandler(req, res, {
    Remarks: "User DTH Recharge History",
    Data: hist,
  });
});

// recharge history by admin
const dthHistoryByAdmin = asyncHandler(async (req, res) => {
  const hist = await DTH.find().populate("userId");
  // success handler
  successHandler(req, res, {
    Remarks: "Fetch DTH Recharge History",
    Data: (hist.reverse()),
  });
});

// ----------- If recharge fail when initiate refund by admin ------------ //
const handleFailedRecharge = asyncHandler(async (req, res) => {
  const { rechargeId } = req.body;
  if (!rechargeId) {
    res.status(400);
    throw new Error("Please fill all fields");
  }
  const findRecharge = await Recharge.findOne({ _id: rechargeId });

  if (findRecharge.status === "Refunded") {
    res.status(400);
    throw new Error("Already refunded.");
  } else {
    if (findRecharge) {
      const findTxn = await Transaction.findOne({
        txnId: findRecharge.transactionId,
        userId: findRecharge.userId,
      });
      const userFound = await User.findById(findRecharge.userId);
      const findService = await Service.findById(findTxn?.serviceId);
      const percent =
        (findTxn.txnAmount / 100) *
        (findTxn.isUsePrime ? 25 : findService.percent);

      // update wallet
      await Wallet.updateOne(
        { userId: findRecharge.userId },
        {
          $inc: {
            balance: findTxn.txnAmount - percent,
            goPoints: findTxn.isUsePrime ? 0 : percent,
            primePoints: findTxn.isUsePrime ? percent : 0,
          },
        }
      );

      // Push notification
      const notification = {
        title: "Recharge Refund",
        body: `Your recharge refund ${findTxn.txnAmount} rupay is refunded into wallet.`,
      };
      // save notification
      const newNotification = new Notification({
        ...notification,
        recipient: findRecharge.userId,
      });
      await newNotification.save();
      userFound.deviceToken &&
        sendNotification(notification, userFound.deviceToken);

      // ----------- Create Txn History ------------- //
      const subtractBalance = new Transaction({
        userId: userFound._id,
        recipientId: userFound._id,
        txnName: "Recharge Refund",
        txnDesc: "Your recharge refund issued.",
        txnAmount: findTxn.txnAmount,
        txnType: "credit",
        txnStatus: "TXN_SUCCESS",
        txnResource: "Wallet",
        txnId: Math.floor(Math.random() * Date.now()) + "refund",
        orderId: Math.floor(Math.random() * Date.now()) + "refund",
        ipAddress: getIpAddress(req),
      });
      await subtractBalance.save(); // wallet balance history
      const subtractGoPoints = new Transaction({
        userId: userFound._id,
        recipientId: userFound._id,
        txnName: "Recharge Refund",
        txnDesc: "Your recharge refund issued.",
        txnType: "credit",
        txnStatus: "TXN_SUCCESS",
        txnResource: findTxn.isUsePrime ? "PrimePoints" : "GoPoints",
        txnId: Math.floor(Math.random() * Date.now()) + "refund",
        orderId: Math.floor(Math.random() * Date.now()) + "refund",
        txnAmount: percent,
        ipAddress: getIpAddress(req),
      });
      await subtractGoPoints.save(); // go points history

      await Recharge.updateOne({ _id: rechargeId }, { status: "Refunded" });
      successHandler(req, res, { Remarks: "Refund issued success" });
    } else {
      res.status(400);
      throw new Error("Please enter valid recharge id.");
    }
  }
});

// const Recharge_CallBack_Handler = asyncHandler(async (req, res) => {
//   const Status =
//     req.query.Status || req.query.status || req.query.STATUS === 1
//       ? "success"
//       : "failed";
//   const TransID = req.query.TransID || req.query.txid || req.query.RRR;
//   if (!Status || !TransID) {
//     return res.status(400).json({ error: "Missing parameters" });
//   }

//   function sendEmail() {
//     // Set up a transporter object with Gmail credentials
//     const transporter = nodemailer.createTransport({
//       host: "smtp.gmail.com",
//       port: 587,
//       secure: false,
//       auth: {
//         user: service_email,
//         pass: service_email_password,
//       },
//     });

//     const mailOptions = {
//       from: service_email,
//       to: "hinditutors.com@gmail.com",
//       subject: "Recharge Callback Handle",
//       html: `<html>
//       <head></head>
//       <body>
//       <h2>Status : ${Status}</h2>
//       <h2>TransID : ${TransID}</h2>

//       </body>
//     </html>`,
//     };

//     // Send the email
//     transporter.sendMail(mailOptions, (error, info) => {
//       if (error) {
//         console.error("error", error);
//       } else {
//         console.log(`Email sent: ${info.response}`);
//       }
//     });
//   }
//   sendEmail();

//   const findRecord = await Recharge.findOne({
//     transactionId: TransID,
//   });
//   console.log(findRecord, "findRecord");

//   if (findRecord) {
//     console.log("findRecord ke andar");

//     const findTxn = await Transaction.findOne({
//       txnId: findRecord.transactionId,
//       userId: findRecord.userId,
//     });
//     console.log(findTxn, "findTxn");

//     const findService = await Service.findById(findTxn?.serviceId);
//     console.log(findService, "findService,");

//     const percent = (findTxn.txnAmount / 100) * findService.percent;
//     const userFound = await User.findById(findRecord.userId);
//     console.log(userFound, "userFound,");

//     const walletFound = await Wallet.findOne({ userId: userFound._id });
//     console.log(walletFound, "walletFound,");

//     if (
//       (Status.toLowerCase() === "failed" ||
//         Status.toLowerCase() === "failure") &&
//       findRecord.status.toLowerCase() === "pending"
//     ) {
//       console.log("pending to failed,");

//       await Recharge.findOneAndUpdate(
//         {
//           transactionId: TransID,
//         },
//         { $set: { status: Status } }
//       );

//       // Send Notificaiton for Failed Recharge
//       const notification = {
//         title: "Recharge Failed",
//         body: `Your ${findTxn.txnAmount} recharge is Failed`,
//       };
//       // save notification
//       const newNotification = new Notification({
//         ...notification,
//         recipient: findRecord.userId,
//       });
//       await newNotification.save();
//       // push notification
//       userFound.deviceToken &&
//         sendNotification(notification, userFound.deviceToken);

//       // Refund Amount to User Wallet
//       await Wallet.updateOne(
//         { userId: findRecord.userId },
//         {
//           $inc: {
//             balance: findTxn.txnAmount,
//           },
//         }
//       );

//       // Push notification
//       const Refundnotification = {
//         title: "Recharge Refund",
//         body: `Your recharge refund â‚¹${findTxn.txnAmount} is refunded into wallet.`,
//       };
//       // save notification
//       const newRefundNotification = new Notification({
//         ...Refundnotification,
//         recipient: findRecord.userId,
//       });
//       await newRefundNotification.save();
//       userFound.deviceToken &&
//         sendNotification(Refundnotification, userFound.deviceToken);

//       // ----------- Create Txn History ------------- //
//       const subtractBalance = new Transaction({
//         userId: userFound._id,
//         recipientId: userFound._id,
//         txnName: "Recharge Refund",
//         txnDesc: "Your recharge refund issued.",
//         txnAmount: findTxn.txnAmount,
//         txnType: "credit",
//         txnStatus: "TXN_SUCCESS",
//         txnResource: "Wallet",
//         txnId: TransID + "refund",
//         orderId: TransID + "refund",
//         ipAddress: getIpAddress(req),
//       });
//       await subtractBalance.save(); // wallet balance history
//       const subtractGoPoints = new Transaction({
//         userId: userFound._id,
//         recipientId: userFound._id,
//         txnName: "Recharge Refund",
//         txnDesc: "Your recharge refund issued.",
//         txnType: "credit",
//         txnStatus: "TXN_SUCCESS",
//         txnResource: findTxn.isUsePrime ? "PrimePoints" : "GoPoints",
//         txnId: TransID + (findTxn.isUsePrime ? "primerefund" : "gorefund"),
//         orderId: TransID + (findTxn.isUsePrime ? "primerefund" : "gorefund"),
//         txnAmount: percent,
//         ipAddress: getIpAddress(req),
//       });
//       await subtractGoPoints.save(); // go points history

//       res.status(200).send("Callback processed successfully");
//     } else if (
//       Status.toLowerCase() === "success" &&
//       findRecord.status.toLowerCase() === "pending"
//     ) {
//       console.log("pending to succwss,");

//       await Recharge.findOneAndUpdate(
//         {
//           transactionId: TransID,
//         },
//         { $set: { status: Status } }
//       );

//       // Send Notificaiton for Success Recharge
//       const notification = {
//         title: "Recharge Sucess",
//         body: `Your ${findTxn.txnAmount} recharge is Success`,
//       };
//       // save notification
//       const newNotification = new Notification({
//         ...notification,
//         recipient: findRecord.userId,
//       });
//       await newNotification.save();
//       // push notification
//       userFound.deviceToken &&
//         sendNotification(notification, userFound.deviceToken);

//       // Handle Cashback

//       const cashbackPercent =
//         (parseInt(findTxn.txnAmount) / 100) * findService.percent; // for both (prime & non prime)
//       const ipAddress = getIpAddress(req);
//       await handleCashback(
//         userFound,
//         cashbackPercent,
//         TransID,
//         ipAddress,
//         walletFound
//       );
//       res.status(200).send("Callback processed successfully");
//     } else if (
//       (Status.toLowerCase() === "failed" ||
//         Status.toLowerCase() === "failure") &&
//       findRecord.status.toLowerCase() === "success"
//     ) {
//       await Recharge.findOneAndUpdate(
//         {
//           transactionId: TransID,
//         },
//         { $set: { status: Status } }
//       );

//       // Send Notificaiton for Success Recharge
//       const notification = {
//         title: "Recharge Failed",
//         body: `Your ${findTxn.txnAmount} recharge is Failed`,
//       };
//       // save notification
//       const newNotification = new Notification({
//         ...notification,
//         recipient: findRecord.userId,
//       });
//       await newNotification.save();
//       // push notification
//       userFound.deviceToken &&
//         sendNotification(notification, userFound.deviceToken);

//       const findGoTxn = await Transaction.findOne({
//         txnId: TransID + "go",
//       });

//       // handle Money Refund & Points Refund

//       // ----------- Create Txn History ------------- //
//       const refundBalance = new Transaction({
//         userId: userFound._id,
//         recipientId: userFound._id,
//         txnName: "Recharge Refund",
//         txnDesc: "Your recharge refund Success.",
//         txnAmount: findTxn.txnAmount - findGoTxn.txnAmount,
//         txnType: "credit",
//         txnStatus: "TXN_SUCCESS",
//         txnResource: "Wallet",
//         txnId: TransID + "refund",
//         orderId: TransID + "refund",
//         ipAddress: getIpAddress(req),
//       });
//       await refundBalance.save(); // wallet balance history
//       const refundGoPoints = new Transaction({
//         userId: userFound._id,
//         recipientId: userFound._id,
//         txnName: "Recharge Refund",
//         txnDesc: "Your recharge refund issued.",
//         txnType: "credit",
//         txnStatus: "TXN_SUCCESS",
//         txnResource: findTxn.isUsePrime ? "PrimePoints" : "GoPoints",
//         txnId: TransID + (findTxn.isUsePrime ? "Prime" : "go") + "refund",
//         orderId: TransID + (findTxn.isUsePrime ? "Prime" : "go") + "refund",
//         txnAmount: findGoTxn.txnAmount,
//         ipAddress: getIpAddress(req),
//       });
//       await refundGoPoints.save(); // go points history

//       // Refund Amount to User Wallet
//       await Wallet.updateOne(
//         { userId: findRecord.userId },
//         {
//           $inc: {
//             balance: findTxn.txnAmount - findGoTxn.txnAmount,
//             goPoints: findTxn.isUsePrime ? 0 : findGoTxn.txnAmount,
//             primePoints: findTxn.isUsePrime ? findGoTxn.txnAmount : 0,
//           },
//         }
//       );

//       const Refundnotification = {
//         title: "Recharge Refund",
//         body: `Your recharge refund ${
//           findTxn.txnAmount - findGoTxn.txnAmount
//         } rupee is refunded into wallet.`,
//       };
//       const newRefundNotification = new Notification({
//         ...Refundnotification,
//         recipient: userFound._id,
//       });
//       await newRefundNotification.save();

//       // send notification
//       userFound?.deviceToken &&
//         sendNotification(Refundnotification, userFound?.deviceToken);
//       res.status(200).send("Callback processed successfully");
//     } else {
//       return res.status(400).json({ error: "No Valid Action" });
//     }
//   } else {
//     const findBBPSRecord = await BBPS.findOne({
//       transactionId: TransID,
//     });
//     const findTxn = await Transaction.findOne({
//       txnId: findBBPSRecord.transactionId,
//       userId: findBBPSRecord.userId,
//     });

//     const findService = await Service.findById(findTxn?.serviceId);

//     const percent =
//       (findTxn.txnAmount / 100) *
//       (findTxn.isUsePrime ? 25 : findService.percent);
//     if (findBBPSRecord) {
//       const userFound = await User.findById(findBBPSRecord.userId);
//       const findTxn = await Transaction.findOne({
//         txnId: findBBPSRecord.transactionId,
//         userId: findBBPSRecord.userId,
//       });

//       if (
//         (Status.toLowerCase() === "failed" ||
//           Status.toLowerCase() === "failure") &&
//         findBBPSRecord.status.toLowerCase() === "pending"
//       ) {
//         await BBPS.findOneAndUpdate(
//           {
//             transactionId: TransID,
//           },
//           { $set: { status: Status } }
//         );
//         // Send Notificaiton for Failed Recharge
//         const notification = {
//           title: "Bill Payment Failed",
//           body: `Your ${findTxn.txnAmount} Payment is Failed`,
//         };
//         // save notification
//         const newNotification = new Notification({
//           ...notification,
//           recipient: findBBPSRecord.userId,
//         });
//         await newNotification.save();
//         // push notification
//         userFound.deviceToken &&
//           sendNotification(notification, userFound.deviceToken);

//         // Refund Amount to User Wallet
//         await Wallet.updateOne(
//           { userId: findBBPSRecord.userId },
//           {
//             $inc: {
//               balance: findTxn.txnAmount,
//             },
//           }
//         );

//         // Push notification
//         const Refundnotification = {
//           title: "Payment Refund",
//           body: `Your Payment ${findTxn.txnAmount} rupee is refunded into wallet.`,
//         };
//         // save notification
//         const newRefundNotification = new Notification({
//           ...Refundnotification,
//           recipient: findBBPSRecord.userId,
//         });
//         await newRefundNotification.save();
//         userFound.deviceToken &&
//           sendNotification(Refundnotification, userFound.deviceToken);

//         // ----------- Create Txn History ------------- //
//         const subtractBalance = new Transaction({
//           userId: userFound._id,
//           recipientId: userFound._id,
//           txnName: "Bill Payment Refund",
//           txnDesc: "Your Payment refund issued.",
//           txnAmount: findTxn.txnAmount,
//           txnType: "credit",
//           txnStatus: "TXN_SUCCESS",
//           txnResource: "Wallet",
//           txnId: TransID + "refund",
//           orderId: TransID + "refund",
//           ipAddress: getIpAddress(req),
//         });
//         await subtractBalance.save();
//         res.status(200).send("Callback processed successfully");
//       } else if (
//         Status.toLowerCase() === "success" &&
//         findBBPSRecord.status.toLowerCase() === "pending"
//       ) {
//         if (findBBPSRecord.operator === "GLF") {
//           await BBPS.findOneAndUpdate(
//             {
//               transactionId: TransID,
//             },
//             { $set: { status: Status, operatorRef: req.query.opid } }
//           );

//           // cashback Amount to User Wallet
//           await Wallet.updateOne(
//             { userId: findBBPSRecord.userId },
//             {
//               $inc: {
//                 balance: (findTxn.txnAmount / 100) * findService.percent,
//               },
//             }
//           );

//           // notification
//           const Cashbacknotification = {
//             title: "Received Cashback",
//             body: `Congratulation...! ðŸŽ‰ You got ${
//               (findTxn.txnAmount / 100) * findService.percent
//             } rupee as a cashback.`,
//           };
//           // save notification
//           const newRefundNotification = new Notification({
//             ...Cashbacknotification,
//             recipient: findBBPSRecord.userId,
//           });
//           await newRefundNotification.save();
//           userFound.deviceToken &&
//             sendNotification(Cashbacknotification, userFound.deviceToken);

//           const subtractGoPoints = new Transaction({
//             userId: userFound._id,
//             recipientId: userFound._id,
//             txnName: "Cashback",
//             txnDesc: `Congratulation...! you got ${
//               (findTxn.txnAmount / 100) * findService.percent
//             } rupee cashback`,
//             txnType: "credit",
//             txnStatus: "TXN_SUCCESS",
//             txnResource: "Wallet",
//             txnId: TransID + "cashback",
//             orderId: TransID + "cashback",
//             txnAmount: (findTxn.txnAmount / 100) * findService.percent,
//             ipAddress: getIpAddress(req),
//           });
//           await subtractGoPoints.save(); // go points history
//         } else {
//           await BBPS.findOneAndUpdate(
//             {
//               transactionId: TransID,
//             },
//             { $set: { status: Status } }
//           );
//           // Send Notificaiton for Success Recharge
//           const notification = {
//             title: "Bill Payment Success",
//             body: `Your ${findTxn.txnAmount} Payment is Success`,
//           };
//           // save notification
//           const newNotification = new Notification({
//             ...notification,
//             recipient: findBBPSRecord.userId,
//           });
//           await newNotification.save();
//           // push notification
//           userFound.deviceToken &&
//             sendNotification(notification, userFound.deviceToken);

//           // Refund Amount to User Wallet
//           await Wallet.updateOne(
//             { userId: findBBPSRecord.userId },
//             {
//               $inc: {
//                 goPoints: percent,
//               },
//             }
//           );

//           // notification
//           const Cashbacknotification = {
//             title: "Received Cashback",
//             body: `Congratulation...! ðŸŽ‰ You got ${percent} goPoints as a cashback.`,
//           };
//           // save notification
//           const newRefundNotification = new Notification({
//             ...Cashbacknotification,
//             recipient: findBBPSRecord.userId,
//           });
//           await newRefundNotification.save();
//           userFound.deviceToken &&
//             sendNotification(Cashbacknotification, userFound.deviceToken);

//           const subtractGoPoints = new Transaction({
//             userId: userFound._id,
//             recipientId: userFound._id,
//             txnName: "Cashback",
//             txnDesc: `Congratulation...! you got ${percent} goPoints cashback`,
//             txnType: "credit",
//             txnStatus: "TXN_SUCCESS",
//             txnResource: "GoPoints",
//             txnId: TransID + "go",
//             orderId: TransID + "go",
//             txnAmount: percent,
//             ipAddress: getIpAddress(req),
//           });
//           await subtractGoPoints.save(); // go points history
//         }

//         res.status(200).send("Callback processed successfully");
//       } else {
//         return res.status(400).json({ error: "No Valid Action" });
//       }
//     } else {
//       return res.status(400).json({ error: "invalid TxnID" });
//     }
//   }
// });

const handleRechargeStatusUpdate = async (TransID, Status) => {
  await Recharge.findOneAndUpdate(
    {
      transactionId: TransID,
    },
    { $set: { status: Status } }
  );
};
const handleBBPSStatusUpdate = async (TransID, Status) => {
  await BBPS.findOneAndUpdate(
    {
      transactionId: TransID,
    },
    { $set: { status: Status } }
  );
};
const handleRechargeSendNotification = async (
  findTxn,
  findRecord,
  userFound,
  Status
) => {
  const notification = {
    title: `Recharge ${Status}`,
    body: `Your ${findTxn.txnAmount} recharge is ${Status}`,
  };
  // save notification
  const newNotification = new Notification({
    ...notification,
    recipient: findRecord.userId,
  });
  await newNotification.save();
  // push notification
  userFound.deviceToken &&
    sendNotification(notification, userFound.deviceToken);
};
const handleBBPSSendNotification = async (
  findTxn,
  findBBPSRecord,
  userFound,
  Status
) => {
  const notification = {
    title: `Bill Payment ${Status}`,
    body: `Your ${findTxn.txnAmount} Payment is ${Status}`,
  };
  // save notification
  const newNotification = new Notification({
    ...notification,
    recipient: findBBPSRecord.userId,
  });
  await newNotification.save();
  // push notification
  userFound.deviceToken &&
    sendNotification(notification, userFound.deviceToken);
};
const handleDTHStatusUpdate = async (TransID, Status) => {
  await DTH.findOneAndUpdate(
    {
      transactionId: TransID,
    },
    { $set: { status: Status } }
  );
};
const handleDTHSendNotification = async (
  findTxn,
  findDTHRecord,
  userFound,
  Status
) => {
  const notification = {
    title: `DTH Recharge is ${Status}`,
    body: `Your â‚¹${findTxn.txnAmount} DTH Recharge is ${Status}`,
  };
  // save notification
  const newNotification = new Notification({
    ...notification,
    recipient: findDTHRecord.userId,
  });
  await newNotification.save();
  // push notification
  userFound.deviceToken &&
    sendNotification(notification, userFound.deviceToken);
};

const Recharge_CallBack_Handler = asyncHandler(async (req, res) => {
  try {
    let Status;
    let TransID;

    if (req.method === "POST") {
      Status = req.body.Status || req.body.status;
      TransID = req.body.order_id;
    } else if (req.method === "GET") {
      Status =
        req.query.Status || req.query.status || req.query.STATUS === 1
          ? "success"
          : "failed";
      TransID =
        req.query.TransID ||
        req.query.txid ||
        req.query.RRR ||
        req.query.order_id;
    }
    if (!Status || !TransID) {
      return res.status(400).json({ error: "Missing parameters" });
    }
    //     sendEmail(
    //   {
    //     phone: "calling",
    //     firstName: `Status : ${Status}, TransID : ${TransID}`,
    //   },
    //   "USER_CONGRATES"
    // );
    const findRecord = await Recharge.findOne({
      transactionId: TransID,
    });

    if (findRecord) {
      const findTxn = await Transaction.findOne({
        txnId: findRecord.transactionId,
        userId: findRecord.userId,
      });

      const findService = await Service.findById(findTxn?.serviceId);

      const percent = (findTxn.txnAmount / 100) * findService.percent;
      const userFound = await User.findById(findRecord.userId);

      const walletFound = await Wallet.findOne({ userId: userFound._id });

      if (
        (Status.toLowerCase() === "failed" ||
          Status.toLowerCase() === "failure") &&
        (findRecord.status.toLowerCase() === "pending" ||
          findRecord.status.toLowerCase() === "error")
      ) {
        await saveLog(
          `MOBILE_RECHARGE`,
          `${
            findRecord.provider == "Billhub"
              ? "https://api.billhub.in/reseller/recharge"
              : "https://business.a1topup.com/recharge/api"
          }`,
          "https://google.com/api/wallet/callback", // or full request payload
          req.body || req.query,
          `Recharge Callback Status Update : ${Status} for TxnID: ${TransID}`
        );
        await handleRechargeStatusUpdate(TransID, Status);

        // Send Notificaiton for Failed Recharge

        await handleRechargeSendNotification(
          findTxn,
          findRecord,
          userFound,
          Status
        );

        //   Refund Amount Start------------------------
        const FindUser = userFound;
        const amount = findTxn.txnAmount;
        const transactionId = TransID;
        const ipAddress = getIpAddress(req);
        await handleRefund(
          FindUser,
          amount,
          transactionId,
          ipAddress,
          walletFound
        );

        res.status(200).send("Callback processed successfully");
      } else if (
        Status.toLowerCase() === "success" &&
        (findRecord.status.toLowerCase() === "pending" ||
          findRecord.status.toLowerCase() === "error")
      ) {
        await saveLog(
          `MOBILE_RECHARGE`,
          `${
            findRecord.provider == "Billhub"
              ? "https://api.billhub.in/reseller/recharge"
              : "https://business.a1topup.com/recharge/api"
          }`,
          "https://production-api.google.info/api/wallet/callback", // or full request payload
          req.body || req.query,
          `Recharge Callback Status Update : ${Status} for TxnID: ${TransID}`
        );
        await handleRechargeStatusUpdate(TransID, Status);

        // Send Notificaiton for Success Recharge
        await handleRechargeSendNotification(
          findTxn,
          findRecord,
          userFound,
          Status
        );

        // Handle Cashback

        const findRechargeOperator = await RechargeOperator.findOne({
          serviceId: findService._id,
        });
        if (!findRechargeOperator) {
          throw new Error("Recharge operator or operator data not found.");
        }
        let findPercent;
        const operatorMapping = {
          2: findRechargeOperator.airtel,
          11: findRechargeOperator.jio,
          23: findRechargeOperator.vi,
          4: findRechargeOperator.bsnl,
        };
        findPercent = operatorMapping[findRecord.operator] || 0; // Default 0 if not found
        const cashbackPercent =
          (parseInt(findTxn.txnAmount) / 100) * findPercent;
        const ipAddress = getIpAddress(req);
        await handleCashback(
          userFound,
          cashbackPercent,
          TransID,
          ipAddress,
          walletFound
        );
        res.status(200).send("Callback processed successfully");
      } else if (
        (Status.toLowerCase() === "failed" ||
          Status.toLowerCase() === "failure") &&
        findRecord.status.toLowerCase() === "success"
      ) {
        await handleRechargeStatusUpdate(TransID, Status);

        // Send Notificaiton for Success Recharge
        await handleRechargeSendNotification(
          findTxn,
          findRecord,
          userFound,
          Status
        );
        const ipAddress = getIpAddress(req);
        const findCashbackTxn = await Transaction.findOne({
          txnId: `${findRecord.transactionId}cashback`,
          userId: findRecord.userId,
        });

        // HandleRefund
        await handleDisputeRefund(
          userFound,
          findTxn,
          findCashbackTxn,
          TransID,
          ipAddress,
          walletFound
        );
        // Refund Sucess
        res.status(200).send("Callback processed successfully");
      } else {
        res.status(200).json("No Valid Action");
      }
    } else {
      const findBBPSRecord = await BBPS.findOne({
        transactionId: TransID,
      });

      if (findBBPSRecord) {
        const findTxn = await Transaction.findOne({
          txnId: findBBPSRecord.transactionId,
          userId: findBBPSRecord.userId,
        });
        const findService = await Service.findById(findTxn?.serviceId);

        const percent = (findTxn.txnAmount / 100) * findService.percent;
        const userFound = await User.findById(findBBPSRecord.userId);
        const walletFound = await Wallet.findOne({ userId: userFound._id });

        if (
          (Status.toLowerCase() === "failed" ||
            Status.toLowerCase() === "failure") &&
          findBBPSRecord.status.toLowerCase() === "pending"
        ) {
          await saveLog(
            `BILL_PAYMENT`,
            `${
              findRecord.provider == "Billhub"
                ? "https://api.billhub.in/reseller/recharge"
                : "https://business.a1topup.com/recharge/api"
            }`,
            "https://production-api.google.info/api/wallet/callback", // or full request payload
            req.body || req.query,
            `Recharge Callback Status Update : ${Status} for TxnID: ${TransID}`
          );
          await handleBBPSStatusUpdate(TransID, Status);
          // Send Notificaiton for Failed Recharge
          await handleBBPSSendNotification(
            findTxn,
            findBBPSRecord,
            userFound,
            Status
          );

          const FindUser = userFound;
          const amount = findTxn.txnAmount;
          const transactionId = TransID;
          const ipAddress = getIpAddress(req);

          await handleRefund(
            FindUser,
            amount,
            transactionId,
            ipAddress,
            walletFound
          );
          res.status(200).send("Callback processed successfully");
        } else if (
          Status.toLowerCase() === "success" &&
          findBBPSRecord.status.toLowerCase() === "pending"
        ) {
          await saveLog(
            `BILL_PAYMENT`,
            `${
              findRecord.provider == "Billhub"
                ? "https://api.billhub.in/reseller/recharge"
                : "https://business.a1topup.com/recharge/api"
            }`,
            "https://production-api.google.info/api/wallet/callback",
            req.body || req.query,
            `Recharge Callback Status Update : ${Status} for TxnID: ${TransID}`
          );
          if (findBBPSRecord.operator === "GLF") {
            await BBPS.findOneAndUpdate(
              {
                transactionId: TransID,
              },
              { $set: { status: Status, operatorRef: req.query.opid } }
            );

            // cashback Amount to User Wallet
            const FindUser = userFound;
            const cashbackPercent = percent;
            const txnId = TransID;
            const ipAddress = getIpAddress(req);
            await handleCashback(
              FindUser,
              cashbackPercent,
              txnId,
              ipAddress,
              walletFound
            );
          } else {
            await handleBBPSStatusUpdate(TransID, Status);
            // Send Notificaiton for Success Recharge
            await handleBBPSSendNotification(
              findTxn,
              findBBPSRecord,
              userFound,
              Status
            );
            const FindUser = userFound;
            const cashbackPercent = percent;
            const txnId = TransID;
            const ipAddress = getIpAddress(req);
            await handleCashback(
              FindUser,
              cashbackPercent,
              txnId,
              ipAddress,
              walletFound
            );
          }

          res.status(200).send("Callback processed successfully");
        } else {
          return res.status(400).json({ error: "No Valid Action" });
        }
      } else {
        const findDTHRecord = await DTH.findOne({
          transactionId: TransID,
        });

        if (findDTHRecord) {
          const findTxn = await Transaction.findOne({
            txnId: findDTHRecord.transactionId,
            userId: findDTHRecord.userId,
          });
          const findService = await Service.findById(findTxn?.serviceId);
          const userFound = await User.findById(findDTHRecord.userId);
          const walletFound = await Wallet.findOne({ userId: userFound._id });
          const percent = (findTxn.txnAmount / 100) * findService.percent;
          if (
            (Status.toLowerCase() === "failed" ||
              Status.toLowerCase() === "failure") &&
            findDTHRecord.status.toLowerCase() === "pending"
          ) {
            await handleDTHStatusUpdate(TransID, Status);
            // Send Notificaiton for Failed Recharge
            await handleDTHSendNotification(
              findTxn,
              findDTHRecord,
              userFound,
              Status
            );

            const FindUser = userFound;
            const amount = findTxn.txnAmount;
            const transactionId = TransID;
            const ipAddress = getIpAddress(req);

            await handleRefund(
              FindUser,
              amount,
              transactionId,
              ipAddress,
              walletFound
            );
            res.status(200).send("Callback processed successfully");
          } else if (
            Status.toLowerCase() === "success" &&
            findDTHRecord.status.toLowerCase() === "pending"
          ) {
            await handleDTHStatusUpdate(TransID, Status);
            // Send Notificaiton for Success Recharge
            await handleBBPSSendNotification(
              findTxn,
              findBBPSRecord,
              userFound,
              Status
            );
            const FindUser = userFound;
            const cashbackPercent = percent;
            const txnId = TransID;
            const ipAddress = getIpAddress(req);
            await handleCashback(
              FindUser,
              cashbackPercent,
              txnId,
              ipAddress,
              walletFound
            );

            res.status(200).send("Callback processed successfully");
          } else {
            return res.status(400).json({ error: "No Valid Action" });
          }
        }

        return res.status(400).json({ error: "invalid TxnID" });
      }
    }
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
});
const Get_Recharge_Operator_Percent = asyncHandler(async (req, res) => {
  try {
    const findOperator = await RechargeOperator.findOne();
    res.status(200).send(findOperator);
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
});

const Recharge_Status_Verify = asyncHandler(async (req, res) => {
  try {
    const { order_id } = req.query;
    const provider = req.query.provider.toLowerCase();
    if (provider == "billhub") {
      try {
        const URL = `https://api.billhub.in/reseller/status/?token=${process.env.BILLHUB_TOKEN}&order_id=${order_id}`;

        await saveLog(
          "MOBILE_RECHARGE_STATUS",
          "https://api.billhub.in/reseller/status",
          URL, // or full request payload
          null,
          `Recharge Status initiated for TxnID: ${order_id}`
        );

        const response = await axios.get(URL);

        await saveLog(
          "MOBILE_RECHARGE_STATUS",
          "https://api.billhub.in/reseller/status",
          URL, // or full request payload
          response.data,
          `Recharge Status Response for TxnID: ${order_id}, Status : ${response.data.status}`
        );

        if (!response.data || !response.data.status) {
          res.status(400);
          throw new Error("Failed to fetch status from billhub.");
        }

        const payload = {
          order_id: order_id,
          status: response.data.status,
        };

        const resP = await axios.post(
          `https://production-api.google.info/api/wallet/callback`,
          payload,
          { headers: { "Content-Type": "application/json" } }
        );
        res.status(200).json({ message: resP.data });
      } catch (error) {
        if (
          error.response &&
          error.response.status === 404 &&
          error.response.data.message == "Transaction does not exist"
        ) {
          const payload = {
            order_id: order_id,
            status: "failed",
          };

          const resP = await axios.post(
            `https://production-api.google.info/api/wallet/callback`,
            payload,
            { headers: { "Content-Type": "application/json" } }
          );
          res.status(200).json({ message: resP.data });
        } else {
          res.status(400);
          throw new Error(error.message);
        }
      }
    } else if (provider == "a1topup" || provider == "a1 topup") {
      try {
        const URL = `https://business.a1topup.com/recharge/status?username=${process.env.A1_TOPUP_USERNAME}&pwd=123&orderid=${order_id}&format=json`;

        await saveLog(
          "MOBILE_RECHARGE_STATUS",
          "https://business.a1topup.com/recharge/status",
          URL, // or full request payload
          null,
          `Recharge Status initiated for TxnID: ${order_id}`
        );
        const response = await axios.get(URL);
        await saveLog(
          "MOBILE_RECHARGE_STATUS",
          "https://business.a1topup.com/recharge/status",
          URL, // or full request payload
          response.data,
          `Recharge Status Response for TxnID: ${order_id}, Status : ${response.data.status}`
        );

        if (!response.data || !response.data.status) {
          res.status(400);
          throw new Error("Failed to fetch status from a1topup.");
        }

        const payload = {
          order_id: order_id,
          status: response.data.status?.toLowerCase(),
        };

        const resP = await axios.post(
          `https://production-api.google.info/api/wallet/callback`,
          payload,
          { headers: { "Content-Type": "application/json" } }
        );
        res.status(200).json({ message: resP.data });
      } catch (error) {
        res.status(400);
        throw new Error(error.message);
      }
    } else if (provider == "mobikwik") {
      try {
        const URL = `https://${process.env.MOBIKWIK_HOSTNAME}/rechargeStatus.do?uid=${process.env.MOBIKWIK_UID}&pwd=${process.env.MOBIKWIK_PASSWORD}&txId=${order_id}`;

        await saveLog(
          "MOBILE_RECHARGE_STATUS",
          `https://${process.env.MOBIKWIK_HOSTNAME}/rechargeStatus.do`,
          URL, // or full request payload
          null,
          `Recharge Status initiated for TxnID: ${order_id}`
        );

        const Mobiresponse = await axios.get(URL);

        const response = await parseXMLToJSON(Mobiresponse.data, "txStatus");
        // console.log(response, "response");

        await saveLog(
          "MOBILE_RECHARGE_STATUS",
          `https://${process.env.MOBIKWIK_HOSTNAME}/rechargeStatus.do`,
          URL, // or full request payload
          response,
          `Recharge Status Response for TxnID: ${order_id}, Status : ${response.status}`
        );

        if (!response || !response.status) {
          res.status(400);
          throw new Error("Failed to fetch status from Mobikwik.");
        }

        const payload = {
          order_id: order_id,
          status:
            response.status == "RECHARGESUCCESSPENDING"
              ? "pending"
              : response.status.toLowerCase(),
        };

        const resP = await axios.post(
          `https://production-api.google.info/api/wallet/callback`,
          payload,
          { headers: { "Content-Type": "application/json" } }
        );
        res.status(200).json({ message: resP.data });
      } catch (error) {
        if (
          error.response &&
          error.response.status === 404 &&
          error.response.data.message == "Transaction does not exist"
        ) {
          const payload = {
            order_id: order_id,
            status: "failed",
          };

          const resP = await axios.post(
            `https://production-api.google.info/api/wallet/callback`,
            payload,
            { headers: { "Content-Type": "application/json" } }
          );
          res.status(200).json({ message: resP.data });
        } else {
          res.status(400);
          throw new Error(error.message);
        }
      }
    }
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
});

const Recharge_All_Status_Verify = asyncHandler(async (req, res) => {
  try {
    // Fetch all pending records from the database
    const pendingRecords = await Recharge.find({ status: "pending" });

    if (!pendingRecords.length) {
      return res.status(200).json({ message: "No pending records found." });
    }

    // Process each record based on the provider
    const results = await Promise.allSettled(
      pendingRecords.map(async (record) => {
        try {
          let apiResponse;

          // Determine the API to call based on the provider
          if (record.provider.toLowerCase() === "billhub") {
            try {
              apiResponse = await axios.get(
                `https://api.billhub.in/reseller/status/?token=${process.env.BILLHUB_TOKEN}&order_id=${record.transactionId}`
              );

              if (!apiResponse.data || !apiResponse.data.status) {
                res.status(400);
                throw new Error("Failed to fetch status from a1topup.");
              }

              const payload = {
                order_id: record.transactionId,
                status: apiResponse.data.status?.toLowerCase(),
              };

              const resP = await axios.post(
                `https://production-api.google.info/api/wallet/callback`,
                payload,
                { headers: { "Content-Type": "application/json" } }
              );
              res.status(200).json({ message: resP.data });
            } catch (error) {
              if (
                error.response &&
                error.response.status === 404 &&
                error.response.data.message == "Transaction does not exist"
              ) {
                const payload = {
                  order_id: order_id,
                  status: "failed",
                };

                const resP = await axios.post(
                  `https://production-api.google.info/api/wallet/callback`,
                  payload,
                  { headers: { "Content-Type": "application/json" } }
                );
                res.status(200).json({ message: resP.data });
              } else {
                res.status(400);
                throw new Error(error.message);
              }
            }
          } else if (
            record.provider.toLowerCase() === "a1topup" ||
            record.provider.toLowerCase() === "a1 topup"
          ) {
            apiResponse = await axios.get(
              `https://business.a1topup.com/recharge/status?username=${process.env.A1_TOPUP_USERNAME}&pwd=123&orderid=${record.transactionId}&format=json`
            );

            if (!apiResponse.data || !apiResponse.data.status) {
              res.status(400);
              throw new Error("Failed to fetch status from a1topup.");
            }

            try {
              const payload = {
                order_id: record.transactionId,
                status: apiResponse.data.status?.toLowerCase(),
              };

              const resP = await axios.post(
                `https://production-api.google.info/api/wallet/callback`,
                payload,
                { headers: { "Content-Type": "application/json" } }
              );
              res.status(200).json({ message: resP.data });
            } catch (error) {
              res.status(400);
              throw new Error(error.message);
            }
          } else {
            throw new Error(`Unknown provider: ${record.provider}`);
          }

          // Update record status
          record.status = apiResponse.data.status;
          await record.save();

          return { recordId: record.id, status: "success" };
        } catch (error) {
          console.error(`Error verifying record ${record.id}:`, error.message);
          return {
            recordId: record.id,
            status: "failed",
            error: error.message,
          };
        }
      })
    );

    return res
      .status(200)
      .json({ message: "Verification completed.", results });
  } catch (error) {
    console.error("Error processing pending records:", error.message);
    res.status(500).json({
      message: "Failed to verify pending records.",
      error: error.message,
    });
  }
});

const Update_Recharge_Commission = asyncHandler(async (req, res) => {
  const { percentages } = req.body;

  // Validate the input
  if (!percentages || typeof percentages !== "object") {
    res.status(400);
    throw new Error("Percentages object is required.");
  }

  // Prepare allowed operators
  const allowedOperators = ["airtel", "vi", "jio", "bsnl"];
  const updateFields = {};

  // Validate and filter the input
  for (const [operator, percentage] of Object.entries(percentages)) {
    if (!allowedOperators.includes(operator)) {
      res.status(400);
      throw new Error(`Invalid operator: ${operator}`);
    }
    updateFields[operator] = percentage;
  }

  if (Object.keys(updateFields).length === 0) {
    res.status(400);
    throw new Error("No valid operators provided for update.");
  }

  // Perform the update
  const result = await RechargeOperator.updateMany({}, { $set: updateFields });

  if (result.matchedCount === 0) {
    res.status(404);
    throw new Error("No RechargeOperator records found.");
  }

  res.status(200).json({
    message: "Operator percentages updated successfully",
  });
});

const CHECK_STATUS_API = async (apiTransID, provider) => {
  // Call actual API here

  if (provider === "Billhub") {
    try {
      const URL = `https://api.billhub.in/reseller/status/?token=${process.env.BILLHUB_TOKEN}&order_id=${apiTransID}`;

      const response = await axios.get(URL);

      if (!response.data || !response.data.status) {
        throw new Error("Failed to fetch status from billhub.");
      }

      return {
        status: response.data.status?.toLowerCase(), // or "FAILED", or "PENDING"
        operatorRef: response.data.operatorrefno, // optional
      };
    } catch (error) {
      throw new Error(error.message);
    }
  } else if (provider === "A1Topup") {
    try {
      const URL = `https://business.a1topup.com/recharge/status?username=${process.env.A1_TOPUP_USERNAME}&pwd=123&orderid=${apiTransID}&format=json`;

      const response = await axios.get(URL);

      if (!response.data || !response.data.status) {
        throw new Error("Failed to fetch status from a1topup.");
      }

      return {
        status: response.data.status?.toLowerCase(), // or "FAILED", or "PENDING"
        operatorRef: response.data.operatorrefno, // optional
      };
    } catch (error) {
      throw new Error(error.message);
    }
  } else if (provider === "Mobikwik") {
    // console.log("Mobikwik Called");
    try {
      const URL = `https://${process.env.MOBIKWIK_HOSTNAME}/rechargeStatus.do?uid=${process.env.MOBIKWIK_UID}&pwd=${process.env.MOBIKWIK_PASSWORD}&txId=${apiTransID}`;

      const Mobiresponse = await axios.get(URL);

      const response = await parseXMLToJSON(Mobiresponse.data, "txStatus");
      // console.log(response, "response");

      const status =
        (response.status === "RECHARGESUCCESSPENDING" && "pending") ||
        (response.status === "RECHARGESUCCESS" && "success") ||
        (response.status === "RECHARGEFAILURE" && "failed");
      return {
        status: status, // or "FAILED", or "PENDING"
        operatorRef: response.operatorrefno, // optional
      };
    } catch (error) {
      res.status(400);
      throw new Error(error.message);
    }
  }
};

const CHECK_PENDING_TRANSACTION = async () => {
  const fiveMinsAgo = moment().subtract(5, "minutes").toDate();

  const collections = [
    { model: Recharge, name: "Recharge" },
    { model: DTH, name: "DTH" },
    { model: BBPS, name: "BBPS" },
  ];

  for (const { model, name } of collections) {
    try {
      const pendingRecords = await model.find({
        status: "pending",
        $or: [{ lastCheckedAt: null }, { lastCheckedAt: { $lt: fiveMinsAgo } }],
      });

      for (const record of pendingRecords) {
        // console.log(record, "record");
        const response = await CHECK_STATUS_API(
          record.apiTransID,
          record.provider
        );

        await model.findByIdAndUpdate(record._id, {
          status: response.status,
          operatorRef: response.operatorRef || record.operatorRef,
          lastCheckedAt: new Date(),
        });
      }

      // console.log(`[${name}] Checked ${pendingRecords.length} pending records`);
    } catch (error) {
      console.error(`[${name}] Error:`, error.message);
    }
  }
};

const DTHOperatorArr = [
  {
    OperatorCode: "DTV",
    OperatorName: "Dish TV",
  },
  {
    OperatorCode: "TTV",
    OperatorName: "Tata Sky",
  },
  {
    OperatorCode: "VTV",
    OperatorName: "Videocon DTH",
  },
  {
    OperatorCode: "STV",
    OperatorName: "Sun Direct",
  },
  {
    OperatorCode: "ATV",
    OperatorName: "Airtel Digital TV",
  },
];

module.exports = {
  planFetch,
  //   getOperator,
  //   getCircle,
  //   getBalance,
  rechargeRequest,
  //   rechargeStatus,
  //   dthInfoFetch,
  rechargeHistory,
  dthRequest,
  dthHistory,
  handleFailedRecharge,
  rechargeHistoryByAdmin,
  dthHistoryByAdmin,
  Recharge_CallBack_Handler,
  Get_Operator_Circle_By_Phone,
  Get_Recharge_Operator_Percent,
  BillhubComplainRaise,
  Recharge_Status_Verify,
  Recharge_All_Status_Verify,
  Update_Recharge_Commission,
  CHECK_PENDING_TRANSACTION,
};
