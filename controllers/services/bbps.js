const axios = require("axios");
const asyncHandler = require("express-async-handler");
const {
  bbps_bill_info,
  bbps_bill_fetch,
  bbps_bill_payment,
} = require("../../cyrus_apis/endpoints");

var FormData = require("form-data");
const Txn = require("../../models/txnSchema");
const User = require("../../models/userSchema");
const bbps = require("../../models/service/bbps");
const Wallet = require("../../models/walletSchema");
const sendEmail = require("../../common/sendEmail");
const Service = require("../../models/serviceSchema");
const successHandler = require("../../common/successHandler");
const Notification = require("../../models/notificationSchema");
const sendNotification = require("../../common/sendNotification");
const getIpAddress = require("../../common/getIpAddress");
const Transaction = require("../../models/txnSchema");

const CryptoJS = require("crypto-js");
const operatorList = require("../../common/operators");
const { encryptFunc } = require("../../common/encryptDecrypt");
const { paywithWallet, handleRefund, handleCashback } = require("../payment");
const { generateOrderId } = require("../../common/generateOrderId");
const { userSignUp } = require("../auth");
const Users = require("../../models/userSchema");
const { createHtmlToPdf } = require("../../common/createHtmlToPdf");
const {
  generatePaySprintToken,
} = require("../../common/generatePaySprintToken");
const { saveLog } = require("../../common/logger");
const CRYPTO_SECRET = process.env.CRYPTO_SECRET;

// cyrus credential
// const CYRUS_BBPS_KEY = process.env.CYRUS_BBPS_KEY;
// const CYRUS_MEMBER_ID = process.env.CYRUS_MEMBER_ID;
// const CYRUS_PAYMENT_KEY = process.env.CYRUS_PAYMENT_KEY;

const BBPS_OPERATOR_LIST_FETCH = asyncHandler(async (req, res) => {
  try {
    // Step 1: Extract Service ID from the request body
    const { serviceId } = req.query;

    // Step 2: Find the service by its ID
    const service = await Service.findById(serviceId);
    const response = await axios.get(
      `https://api.billhub.in/reseller/bbps/operators/?token=${process.env.BILLHUB_TOKEN}`
    );
    // console.log(response.data, "response")
    let filteredOperators = response.data;

    if (service) {
      const findBillhubCategory = BBPS_CATEGORY_ARRAY.find(
        (a) => a.bbps_category == service.name
      );
      filteredOperators = filteredOperators.find(
        (operator) =>
          operator.categoryId == findBillhubCategory.billhub_category
      );
    }
    let DATA_ARRAY = [];

    if (service.name != "Fastag") {
      filteredOperators.providerRoot.map((item) => {
        let RESPONSE_DATA_OBJ = {
          // Naya object har iteration me
          categoryId: filteredOperators.categoryId, // categoryId yahan add kiya gaya hai
          op_id: item.billers[0].op,
          operator_name: item.name,
          regex: item.billers[0].fields[0].regex,
          displayname: item.billers[0].fields[0].name,
          icon: item.billers[0].icon,
          ad: "",
        };
        DATA_ARRAY.push(RESPONSE_DATA_OBJ);
      });
    } else {
      filteredOperators.providerRoot.map((item) => {
        item.providers.map((a) => {
          let RESPONSE_DATA_OBJ = {
            // Naya object har provider ke liye
            categoryId: filteredOperators.categoryId, // categoryId yahan add kiya gaya hai
            op_id: item.billers[0].op,
            operator_name: a.operator_name,
            regex: a.regex,
            displayname: a.name,
            icon: a.icon,
            ad: a.ad1,
          };
          DATA_ARRAY.push(RESPONSE_DATA_OBJ);
        });
      });
    }

    successHandler(req, res, {
      Remarks: response.data.message,
      Data: DATA_ARRAY,
    });

    // Step 4: Fetch operators using the service name and category

    // Step 5: Filter operators based on category and service name

    // Optionally, you can also filter operators based on service name (if needed)
    // filteredOperators = filteredOperators.filter(operator => operator.name === serviceName);

    // Step 6: Return the filtered operators
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
});

const BBPS_BILL_FETCH = asyncHandler(async (req, res) => {
  const { number, operator } = req.body;

  // Mobikwik

  // const options = {
  //   cn: number,
  //   op: operator,
  //   uid: process.env.MOBIKWIK_UID,
  //   pswd: process.env.MOBIKWIK_PASSWORD,
  //   cir: 0,
  //   adParams: {},
  // };
  // console.log(options, "options");
  // try {
  //   const URL = `https://alpha3.mobikwik.com/retailer/v2/retailerViewbill`;
  //   await saveLog(
  //     "BILL_FETCH",
  //     URL,
  //     options, // or full request payload
  //     null,
  //     `Bill_Fetch Request initiated, Number : ${options.cn}`
  //   );
  //   const response = await axios.post(URL, options, {
  //     headers: {
  //       "X-MClient": "14",
  //     },
  //   });
  //   await saveLog(
  //     "BILL_FETCH",
  //     URL,
  //     options, // or full request payload
  //     response.data,
  //     `Bill_Fetch Response Number : ${options.cn}`
  //   );

  //   successHandler(req, res, {
  //     Remarks: response.data.message,
  //     Data: response.data,
  //   });
  // } catch (error) {
  //   res.status(400);
  //   throw new Error(error.message);
  // }

  const options = {
    number,
    operator,
    token: process.env.BILLHUB_TOKEN,
    ad1: req.body.ad1 || "",
  };

  try {
    const URL = `https://api.billhub.in/reseller/bbps/bill-fetch/`;
    await saveLog(
      "BILL_FETCH",
      URL,
      options, // or full request payload
      null,
      `Bill_Fetch Request initiated, Number : ${options.number}`
    );
    const response = await axios.post(URL, options);

    await saveLog(
      "BILL_FETCH",
      URL,
      options, // or full request payload
      response.data,
      `Bill_Fetch Response Number : ${options.number}`
    );

    successHandler(req, res, {
      Remarks: response.data.message,
      Data: response.data,
    });
  } catch (error) {
    res.status(400);
    throw new Error(error.response.data.message);
  }
});

const BILL_PAYMENT = asyncHandler(async (req, res) => {
  try {
    const { _id, deviceToken } = req.data;
    // Dont Send TXN ID Fronend
    const { number, operator, amount, serviceId, mPin } = req.body;

    const TxnAmount = Number(amount);
    const ipAddress = getIpAddress(req);
    if (!serviceId) {
      res.status(400).json({
        ResponseStatus: 0,
        message: `Please provide required fields.`,
      });
      return;
    }
    const findService = await Service.findOne({ _id: serviceId });
    // Check if service is active
    if (!findService?.status) {
      res.status(400).json({
        ResponseStatus: 0,
        message: `${
          findService ? findService.name : "Service"
        } is Temporarily Down`,
      });
      return;
    }
    const FindUser = await Users.findOne({ _id });
    if (!FindUser?.bbps) {
      res.status(400).json({
        ResponseStatus: 0,
        message: `This service is Temporarily Down`,
      });
      return;
    }

    // Amount validation
    if (TxnAmount <= 0) {
      res.status(400).json({
        ResponseStatus: 0,
        message: `Amount should be positive.`,
      });
      return; // Exit the function
    }

    // Decrypt and validate mPin
    const decryptMpin = CryptoJS.AES.decrypt(
      req.data.mPin,
      CRYPTO_SECRET
    ).toString(CryptoJS.enc.Utf8);
    if (mPin.toString() !== decryptMpin) {
      res.status(400).json({
        ResponseStatus: 0,
        message: `Please enter a valid mPin.`,
      });
      return; // Exit the function
    }
    const walletFound = await Wallet.findOne({ userId: _id });
    if (walletFound.balance < TxnAmount) {
      res.status(400).json({
        ResponseStatus: 0,
        message: `Insufficient balance.`,
      });
      return; // Exit the function
    }

    // Wallet Deduction Start -------------------
    const transactionId = generateOrderId();
    const body = {
      orderId: transactionId,
      txnAmount: TxnAmount,
      txnId: transactionId,
      serviceId,
      mPin,
      userId: _id,
      ipAddress,
    };

    const res1 = await paywithWallet({ body });
    // Wallet Deduction End --------------------------
    if (res1.ResponseStatus === 1) {
      const newService = new bbps({
        userId: FindUser._id,
        number,
        operator: operator.name,
        circle: null,
        amount: TxnAmount,
        serviceId: findService._id,
        transactionId,
        status: "PENDING",
        operatorRef: 0,
        apiTransID: 0,
        ipAddress,
      });
      await newService.save();
      try {
        const payload = {
          operator,
          number,
          amount: TxnAmount,
          order_id: transactionId,
          token: process.env.BILLHUB_TOKEN,
          additional_params: req.body.ad1
            ? {
                ad1: req.body.ad1,
              }
            : {},
        };

        const URL = `https://api.billhub.in/reseller/bbps/payment/`;

        await saveLog(
          `BILL_PAYMENT`,
          URL,
          payload, // or full request payload
          null,
          `Bill Payment Request Initiated for TxnID: ${transactionId}`
        );

        const response = await axios.post(URL, payload);

        await saveLog(
          `BILL_PAYMENT`,
          URL,
          payload, // or full request payload
          response.data,
          `Bill Payment Response Status : ${response.data.status} for TxnID: ${transactionId}`
        );
        if (!response.data) {
          successHandler(req, res, {
            Remarks: `Your ${findService.name} is Pending`,
            Data: { status: "PENDING" },
          });
        }

        newService.status = response.data.status?.toLowerCase();
        newService.operatorRef = response.data.operator_ref_id || 0;
        newService.apiTransID = response.data.order_id || 0;
        await newService.save();
        const status = response.data.status?.toLowerCase();
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
          res.status(400).json({
            ResponseStatus: 0,
            message: `Recharge Failed, Please Try Again`,
          });
          return;
        }
        if (status == "success" && findService.percent > 0) {
          const findPercent = findService.percent;
          const cashbackPercent = findPercent;
          await handleCashback(
            FindUser,
            cashbackPercent,
            transactionId,
            ipAddress,
            walletFound
          );
        }

        const notification = {
          title: `${findService.name} Payment is ${status}`,
          body: `Your ₹${TxnAmount} ${findService.name} is ${status}`,
        };
        const newNotification = new Notification({
          ...notification,
          recipient: _id,
        });
        await newNotification.save();
        if (deviceToken) {
          sendNotification(notification, deviceToken);
        }

        // sendEmail(req.data, "SERVICE_RECEIPT", {
        //   ...newService,
        //   operatorName: operator.name,
        //   serviceName: findService.name,
        // });
        //   const value = {
        //     operatorName: findOperator?.Operator_name,
        //     serviceName: "Mobile Recharge",
        //     TransID: transactionId,
        //     currentDate: new Date(), // Get the current date
        //     number: number,
        //     amount: amount,
        //     operatorRef: rechargeRe.data.operator_ref_id,
        //   };
        //   const doc = createHtmlToPdf(req.data, value);
        //   newService.receipt = doc;
        //   await newService.save();
        // Success response
        function capitalize(word) {
          if (!word) return ""; // अगर स्ट्रिंग खाली हो
          return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }
        successHandler(req, res, {
          Remarks: `Your ${findService.name} is ${status}`,
          Data: {
            status: capitalize(status),
            operator_ref_id: response.data.operator_ref_id,
          },
        });
      } catch (error) {
        newService.status = "error";
        await newService.save();
        res.status(400).json({
          ResponseStatus: 0,
          message: error.message,
        });
        return;
      }
    }
  } catch (error) {
    console.log(error, "error");
  }
});

// bbps bill info
// const billInfo = asyncHandler(async (req, res) => {
//   const { methodname, operator } = req.body;

//   // Validate required fields
//   if (!methodname || !operator) {
//     return res
//       .status(400)
//       .json({ message: "Please provide methodname and operator." });
//   }

//   const payload = new FormData();
//   payload.append("methodname", methodname);
//   payload.append("operator", operator);
//   payload.append("pin", CYRUS_BBPS_KEY);
//   payload.append("memberid", CYRUS_MEMBER_ID);
//   payload.append("format", "json");

//   try {
//     const result = await axios.post(bbps_bill_info, payload);

//     // Handle error response
//     if (
//       result.data?.statuscode === "ERR" ||
//       result.data?.status === "Invalid Credientials"
//     ) {
//       return res
//         .status(400)
//         .json({ message: result.data.status || "Error fetching bill info." });
//     }

//     // Successful response
//     successHandler(req, res, {
//       Remarks: "Bill information fetched successfully.",
//       Data: result.data,
//     });
//   } catch (error) {
//     // Catch and handle any unexpected errors
//     res.status(500).json({
//       message:
//         "An error occurred while fetching bill information. Please try again.",
//     });
//   }
// });

// bbps bill fetch
// const billFetch = asyncHandler(async (req, res) => {
//   const { methodname, operator, RequestData } = req.body;

//   // Validate required fields
//   if (!methodname || !operator || !RequestData) {
//     return res.status(400).json({
//       message: "Please provide methodname, operator, and RequestData.",
//     });
//   }

//   const payload = new FormData();
//   payload.append("methodname", methodname);
//   payload.append("operator", operator);
//   payload.append("pin", CYRUS_BBPS_KEY);
//   payload.append("memberid", CYRUS_MEMBER_ID);
//   payload.append("format", "json");
//   payload.append("RequestData", JSON.stringify(RequestData));

//   try {
//     const result = await axios.post(bbps_bill_fetch, payload);

//     // Handle success response
//     if (
//       result.data?.statuscode === "TXN" ||
//       result.data?.status === "Bill Details:"
//     ) {
//       successHandler(req, res, {
//         Remarks: "Bill information fetched successfully.",
//         Data: result.data,
//       });
//     } else {
//       // Return specific error message if available
//     //   return res.status(400).json({
//     //     message: result.data.status || "Error fetching bill details.",
//     //   });
//      res.status(400);
//       throw new Error(result.data.status || "Error fetching bill details.");
//     }
//   } catch (error) {
//     // Handle unexpected errors
//     // res.status(500).json({
//     //   message:
//     //     "An error occurred while fetching bill information. Please try again.",
//     // });
//     res.status(400);
//     throw new Error(
//      error|| "An error occurred while fetching bill information. Please try again."
//     );
//   }
// });

// bbps bill payment
const billPayment = asyncHandler(async (req, res) => {
  try {
    const { _id, deviceToken } = req.data;
    const {
      number,
      operator,
      circle,
      amount,
      account,
      othervalue,
      serviceId,
      othervalue1,
      transactionId,
      mPin,
    } = req.body;

    const ipAddress = getIpAddress(req);
    const findService = await Service.findOne({ _id: serviceId });

    // Check if service is active
    if (!findService?.status) {
      res.status(400);
      throw new Error(
        `${findService ? findService.name : "Service"} is Temporarily Down`
      );
    }

    const FindUser = await Users.findOne({ _id });
    if (!FindUser.status) {
      res.status(400);
      throw new Error("User is Blocked");
    }

    if (!FindUser?.bbps) {
      res.status(400);
      throw new Error("Bill Payment Failed, Please Try Again Ex150");
    }

    // Amount validation
    if (Number(amount) <= 0) {
      res.status(400);
      throw new Error("Amount should be positive.");
    }

    if (!transactionId || !serviceId) {
      res.status(400);
      throw new Error("Please provide required fields.");
    }

    // Decrypt and validate mPin
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

    // Wallet Deduction Start -------------------
    const body = {
      orderId: transactionId,
      txnAmount: amount,
      txnId: transactionId,
      serviceId,
      mPin,
      userId: _id,
      ipAddress,
    };

    const res1 = await paywithWallet({ body });
    // Wallet Deduction End --------------------------

    if (res1.ResponseStatus === 1) {
      const result = await axios.get(
        `https://cyrusrecharge.in/services_cyapi/recharge_cyapi.aspx?memberid=AP953143&pin=299482792A&number=${number}&operator=${operator}&circle=${circle}&amount=${amount}&usertx=${transactionId}&account=${account}&othervalue=${othervalue}&othervalue1=${othervalue1}&format=json`
      );

      const status = result.data.Status?.toLowerCase();
      if (["failure", "error", "failed"].includes(status)) {
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
        throw new Error(result.data.ErrorMessage || "Bill Payment Failed");
      }

      const newService = new bbps({
        userId: _id,
        number,
        operator,
        circle,
        amount,
        serviceId: findService._id,
        transactionId,
        status: result.data.Status,
        operatorRef: result.data.OperatorRef,
        apiTransID: result.data.ApiTransID,
        ipAddress,
      });

      await newService.save();

      if (status === "success" || status === "pending") {
        const notification = {
          title: "Bill Payment",
          body: `Your ₹${amount} bill payment is ${status}`,
        };

        const newNotification = new Notification({
          ...notification,
          recipient: _id,
        });

        await newNotification.save();

        if (deviceToken) sendNotification(notification, deviceToken);

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
        }

        // End Cashback ---------------------------

        sendEmail(req.data, "SERVICE_RECEIPT", {
          ...newService,
          operatorName: operatorList.find((val) => val.operator === operator),
          serviceName: findService.name,
        });
        // const value = {
        //   operatorName: operatorList.find(
        //     (val) => val.OperatorCode === operator
        //   ).OperatorName,
        //   serviceName: "BILL PAYMENT",
        //   TransID: transactionId,
        //   currentDate: new Date(), // Get the current date
        //   number: number,
        //   amount: amount,
        //   operatorRef: result.data.OperatorRef || result.data.ApiTransID,
        // };

        // const doc = createHtmlToPdf(req.data, value);

        // newService.receipt = doc;
        //  await newService.save();

        successHandler(req, res, {
          Remarks: result.data.ErrorMessage,
          Data: result.data,
        });
      }
    } else {
      res.status(400);
      throw new Error("Payment Failed, Please Contact Customer Care.");
    }
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
});

// google Play Purhcase
const googlePlayPayment = asyncHandler(async (req, res) => {
  const { _id, deviceToken } = req.data;
  const { number, amount, serviceId, transactionId, mPin } = req.body;
  const ipAddress = getIpAddress(req);
  // Validate required fields
  if (!transactionId || !serviceId) {
    return res.status(400).json({ message: "Please provide required fields." });
  }

  const [findService, findUser, wallet] = await Promise.all([
    Service.findById(serviceId),
    Users.findById(_id),
    Wallet.findOne({ userId: _id }),
  ]);

  if (!findService || !findService.status) {
    res.status(400);
    throw new Error("This service is temporarily down.");
  }

  if (!findUser.status) {
    res.status(400);
    throw new Error("User is Blocked");
  }

  if (!findUser || !findUser.googlePlay) {
    res.status(400);
    throw new Error("Google Play Failed, Please Try Again Ex150");
  }

  if (Number(amount) <= 0) {
    res.status(400);
    throw new Error("Amount should be positive.");
  }

  if (!req.data.mPin) {
    res.status(400);
    throw new Error("Please set an MPIN.");
  }

  // Decrypt MPIN
  const decryptedMpin = CryptoJS.AES.decrypt(
    req.data.mPin,
    CRYPTO_SECRET
  ).toString(CryptoJS.enc.Utf8);
  if (mPin.toString() !== decryptedMpin) {
    res.status(400);
    throw new Error("Invalid MPIN.");
  }

  // Validate Wallet Balance
  if (!wallet || wallet.balance < Number(amount)) {
    res.status(400);
    throw new Error("Insufficient wallet balance.");
  }

  try {
    // Wallet Deduction Start
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

    if (res1.ResponseStatus === 1) {
      const result = await axios.get(
        `https://api.billhub.in/reseller/recharge/?token=${process.env.BILLHUB_TOKEN}&op_uid=google_play&order_id=${transactionId}&type=redeem-code&number=${findUser.phone}&amount=${amount}&circle=null`
      );
      const status = result.data.status?.toLowerCase();
      if (["failure", "error", "failed"].includes(status)) {
        // Handle Refund
        await handleRefund(findUser, amount, transactionId, ipAddress, wallet);
        res.status(400);
        throw new Error("Transaction Failed");
      }

      const newService = new bbps({
        userId: _id,
        number,
        operator: "GLF",
        circle: "",
        amount,
        serviceId: findService._id,
        transactionId,
        status: result.data.status,
        operatorRef: result.data.operator_ref_id,
        apiTransID: result.data.order_id,
        ipAddress,
      });

      await newService.save();

      if (["success", "pending"].includes(status)) {
        const notification = {
          title: `Google Play Recharge is ${result.data.status}`,
          body: `Your ₹${amount} Google Play recharge is ${result.data.status}`,
        };

        const newNotification = new Notification({
          ...notification,
          recipient: _id,
        });
        await newNotification.save();

        if (deviceToken) {
          sendNotification(notification, deviceToken);
        }

        // Handle Cashback
        if (status == "success") {
          const cashbackPercent = (Number(amount) / 100) * findService.percent;
          await handleCashback(
            findUser,
            cashbackPercent,
            transactionId,
            ipAddress,
            wallet
          );
        }

        // Send Email Receipt
        // sendEmail(req.data, "SERVICE_RECEIPT", {
        //   ...newService,
        //   operatorName: findService.name,
        //   serviceName: "Google Play",
        // });
        //  const value = {
        //   operatorName: findService.name,
        //   serviceName: "Google Play Recharge",
        //   TransID: transactionId,
        //   currentDate: new Date(), // Get the current date
        //   number: number,
        //   amount: amount,
        //   operatorRef: result.data.opid,
        // };

        // const doc = createHtmlToPdf(req.data, value);

        // newService.receipt = doc;
        //  await newService.save();

        // Success Response
        successHandler(req, res, {
          Remarks: result.data.operator_ref_id,
          Data: result.data,
        });
      }
    } else {
      res.status(400);
      throw new Error("Payment Failed, Please Contact Customer Care.");
    }
  } catch (error) {
    res.status(500);
    throw new Error(
      "An error occurred during the transaction. Please try again."
    );
  }
});

// bill payment history by User
const billPaymentHistory = asyncHandler(async (req, res) => {
  const { _id } = req.data;
  const serviceId = req.query.serviceId || null;
  const page = parseInt(req.query.pageNumber) || 1; // Default page number is 1
  const pageSize = parseInt(req.query.pageSize) || 20; // Default page size is 20

  try {
    // Construct query
    const query = { userId: _id };
    if (serviceId) {
      query.serviceId = serviceId;
    }

    // Fetch paginated and sorted results
    const hist = await bbps
      .find(query)
      .sort({ createdAt: -1 }) // Fetch latest records first
      .skip((page - 1) * pageSize)
      .limit(pageSize)
      .lean();

    // Success response
    successHandler(req, res, {
      Remarks: "User Bill Payment History",
      Data:(hist),
    });
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while fetching bill payment history.",
    });
  }
});

// bbps history history by Admin
const bbpsHistory = asyncHandler(async (req, res) => {
  const page = parseInt(req.body.pageNumber) || 1;
  const pageSize = parseInt(req.body.pageSize) || 20;
  const searchVal = req.body.search || "";
  const selectVal = req.body.select || "";
  const startDate = req.body.startDate ? new Date(req.body.startDate) : null;
  const endDate = req.body.endDate ? new Date(req.body.endDate) : null;
  const activeTab = req.body.activeTab || "";

  let query = {};
  let allBbps, LastPage;

  // Build Query Based on Filters
  if (selectVal && searchVal) {
    if (["number", "transactionId"].includes(selectVal)) {
      query[selectVal] = searchVal;
    } else if (selectVal === "userId") {
      const findUser = await Users.findOne({ userId: searchVal });
      if (!findUser) {
        return res
          .status(400)
          .json({ message: `${selectVal} - ${searchVal} is incorrect.` });
      }
      query.userId = findUser._id;
    }
  }

  if (startDate && endDate) {
    query.createdAt = { $gte: startDate, $lte: endDate };
  }

  if (activeTab) {
    query.status = activeTab !== "select" ? activeTab : undefined;
  }

  try {
    const countQuery = bbps.countDocuments(query);
    const fetchQuery = bbps
      .find(query)
      .sort({ createdAt: -1 })
      .skip((page - 1) * pageSize)
      .limit(pageSize)
      .populate("userId")
      .lean();

    const [totalItems, results] = await Promise.all([countQuery, fetchQuery]);
    LastPage = Math.ceil(totalItems / pageSize);

    // Success response
    successHandler(req, res, {
      Remarks: "BBPS History",
      Data: {
        data: results,
        lastPage: LastPage,
      },
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred while fetching BBPS history." });
  }
});

// create refund payment bill
const createRefundBillPayment = asyncHandler(async (req, res) => {
  // Requested , Refunded
  const { _id } = req.data;
  const { billId } = req.body;

  if (!billId) {
    res.status(400);
    throw new Error("Please fill all fields");
  }
  const findBill = await bbps.findOne({ _id: billId, userId: _id });

  if (!findBill) {
    res.status(400);
    throw new Error("Please enter valid bill id.");
  }

  if (findBill?.status === "Refunded") {
    res.status(400);
    throw new Error("Already refunded.");
  } else {
    if (findBill) {
      await bbps.updateOne({ _id: billId }, { status: "Requested" });
      successHandler(req, res, { Remarks: "Refund issued success" });
    } else {
      res.status(400);
      throw new Error("Please enter valid bill id.");
    }
  }
});

// get bill refund request
const getRefundBillRequest = asyncHandler(async (req, res) => {
  const list = await bbps.find({ status: "Requested" });
  successHandler(req, res, { Remarks: "All refund requests.", Data: list });
});

// ----------- If bill fail when initiate refund by admin ------------ //
const handleFailedPayments = asyncHandler(async (req, res) => {
  const { billId } = req.body;
  if (!billId) {
    res.status(400);
    throw new Error("Please fill all fields");
  }
  const findBill = await bbps.findOne({ _id: billId });

  if (findBill.status === "Refunded") {
    res.status(400);
    throw new Error("Already refunded.");
  } else {
    if (findBill) {
      const findTxn = await Txn.findOne({
        txnId: findBill.transactionId,
        userId: findBill.userId,
      });
      const userFound = await User.findById(findBill.userId);
      const findService = await Service.findById(findTxn?.serviceId);
      const percent =
        (findTxn.txnAmount / 100) *
        (findTxn.isUsePrime ? 25 : findService.percent);

      // update wallet
      await Wallet.updateOne(
        { userId: findBill.userId },
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
        title: "Bill Refund",
        body: `Your bill refund ${findTxn.txnAmount} rupay is refunded into wallet.`,
      };
      // save notification
      const newNotification = new Notification({
        ...notification,
        recipient: findBill.userId,
      });
      await newNotification.save();
      userFound.deviceToken &&
        sendNotification(notification, userFound.deviceToken);

      // ----------- Create Txn History ------------- //
      const subtractBalance = new Txn({
        userId: userFound._id,
        recipientId: userFound._id,
        txnName: "Bill Refund",
        txnDesc: "Your bill refund issued.",
        txnAmount: findTxn.txnAmount,
        txnType: "credit",
        txnStatus: "TXN_SUCCESS",
        txnResource: "Wallet",
        txnId: Math.floor(Math.random() * Date.now()) + "refund",
        orderId: Math.floor(Math.random() * Date.now()) + "refund",
        ipAddress: getIpAddress(req),
      });
      await subtractBalance.save(); // wallet balance history
      const subtractGoPoints = new Txn({
        userId: userFound._id,
        recipientId: userFound._id,
        txnName: "Bill Refund",
        txnDesc: "Your bill refund issued.",
        txnType: "credit",
        txnStatus: "TXN_SUCCESS",
        txnResource: findTxn.isUsePrime ? "PrimePoints" : "GoPoints",
        txnId: Math.floor(Math.random() * Date.now()) + "refund",
        orderId: Math.floor(Math.random() * Date.now()) + "refund",
        txnAmount: percent,
        ipAddress: getIpAddress(req),
      });
      await subtractGoPoints.save(); // go points history

      await bbps.updateOne({ _id: billId }, { status: "Refunded" });
      successHandler(req, res, { Remarks: "Refund issued success" });
    } else {
      res.status(400);
      throw new Error("Please enter valid bill id.");
    }
  }
});

const BBPS_CATEGORY_ARRAY = [
  {
    billhub_category: "postpaid",
    bbps_category: "Postpaid",
  },
  {
    billhub_category: "electricity",
    bbps_category: "Electricity",
  },
  {
    billhub_category: "fasTag",
    bbps_category: "Fastag",
  },
  {
    billhub_category: "lpgBooking",
    bbps_category: "LPG",
  },
  {
    billhub_category: "hospitals",
    bbps_category: "Hospital Bills",
  },
  {
    billhub_category: "creditcardpay",
    bbps_category: "Credit Card",
  },
  {
    billhub_category: "subscription",
    bbps_category: "Subscription",
  },
  {
    billhub_category: "landline",
    bbps_category: "Landline",
  },
  {
    billhub_category: "housing",
    bbps_category: "Housing",
  },
  {
    billhub_category: "insurance",
    bbps_category: "Insurance",
  },
  {
    billhub_category: "Education",
    bbps_category: "Education Fee",
  },
  {
    billhub_category: "muncipality",
    bbps_category: "Municipality",
  },
  {
    billhub_category: "water",
    bbps_category: "Water",
  },
  {
    billhub_category: "gas",
    bbps_category: "Gas",
  },
  {
    billhub_category: "cable",
    bbps_category: "Cable",
  },
  {
    billhub_category: "emipayments",
    bbps_category: "EMI",
  },
  {
    billhub_category: "broadband",
    bbps_category: "Broadband",
  },
  {
    billhub_category: "clubs",
    bbps_category: "Club Assoc",
  },
];

module.exports = {
  //   billInfo,
  //   billFetch,
  billPayment,
  billPaymentHistory,
  createRefundBillPayment,
  getRefundBillRequest,
  handleFailedPayments,
  bbpsHistory,
  googlePlayPayment,
  BBPS_OPERATOR_LIST_FETCH,
  BBPS_BILL_FETCH,
  BILL_PAYMENT,
};
