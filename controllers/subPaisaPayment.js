// const asyncHandler = require("express-async-handler");
// const crypto = require("crypto");
// const axios = require("axios");
// const SabPaisaOrder = require("../models/newModels/subPaisaPayment");
// const User = require("../models/userSchema");
// const Service = require("../models/serviceSchema");
// const { addMoney } = require("./wallet");
// const successHandler = require("../common/successHandler");
// const { generateOrderId } = require("../utils/orderUtils");

// // 🔹 AES Encryption function
// const encrypt = (text) => {
//   const algorithm = "aes-128-cbc";
//   const key = Buffer.from(process.env.SABPAISA_AUTH_KEY, "utf8");
//   const iv = Buffer.from(process.env.SABPAISA_AUTH_IV, "utf8");
//   const cipher = crypto.createCipheriv(algorithm, key, iv);
//   let encrypted = cipher.update(text, "utf8");
//   encrypted = Buffer.concat([encrypted, cipher.final()]);
//   return encrypted.toString("base64");
// };

// // 🔹 AES Decryption function
// const decrypt = (text) => {
//   const algorithm = "aes-128-cbc";
//   const key = Buffer.from(process.env.SABPAISA_AUTH_KEY, "utf8");
//   const iv = Buffer.from(process.env.SABPAISA_AUTH_IV, "utf8");
//   const decipher = crypto.createDecipheriv(algorithm, key, iv);
//   let decrypted = decipher.update(Buffer.from(text, "base64"));
//   decrypted = Buffer.concat([decrypted, decipher.final()]);
//   return decrypted.toString();
// };

// // 🔹 Create SabPaisa Order (React Native friendly)
// exports.createSabPaisaOrder = asyncHandler(async (req, res) => {
//   try {
//     const { _id } = req.data;
//     const { amount } = req.body;

//     // ✅ Check service availability
//     const service = await Service.findOne({ name: "ADD_MONEY" });
//     if (!service?.status) {
//       res.status(400);
//       throw new Error("This service Temporarily Down");
//     }

//     // ✅ Check user
//     const user = await User.findById(_id);
//     if (!user?.status) {
//       res.status(400);
//       throw new Error("User blocked");
//     }
//     if (!user.addMoney) {
//       res.status(400);
//       throw new Error("Service temporarily unavailable");
//     }

//     if (Number(amount) < 10) {
//       res.status(400);
//       throw new Error("Minimum ₹10 required");
//     }

//     // 🔹 Generate unique transaction ID
//     const txnId = generateOrderId();

//     // 🔹 Prepare request payload
//     const payload = {
//       payerName: user.firstName,
//       payerEmail: user.email,
//       payerMobile: user.phone,
//       clientTxnId: txnId,
//       amount,
//       clientCode: process.env.SABPAISA_CLIENT_CODE,
//       transUserName: process.env.SABPAISA_TRANS_USER,
//       transUserPassword: process.env.SABPAISA_TRANS_PASSWORD,
//       callbackUrl: process.env.SABPAISA_CALLBACK_URL,
//       channelId: "w",
//       mcc: "5666",
//       transData: new Date().toISOString(),
//       udf1: "ADD_MONEY",
//     };

//     // 🔹 Convert payload to query string
//     const queryString = Object.keys(payload)
//       .map((key) => `${key}=${payload[key]}`)
//       .join("&");

//     // 🔹 Encrypt payload
//     const encryptedData = encrypt(queryString);

//     // 🔹 Save order in DB as PENDING
//     await SabPaisaOrder.create({
//       userId: _id,
//       txnId,
//       amount,
//       status: "PENDING",
//     });

//     // 🔹 Return data to React Native app
//     return successHandler(res, 200, "SabPaisa order created", {
//       encData: encryptedData,
//       spURL: process.env.SABPAISA_PAYMENT_URL, // frontend WebView open karega
//       txnId,
//     });
//   } catch (error) {
//     console.error("Create SabPaisa Order Error:", error.message);
//     throw new Error("Error creating SabPaisa order"); 
//   }
// });

// // 🔹 SabPaisa Callback
// exports.SabPaisaCallback = asyncHandler(async (req, res) => {
//   try {
//     let body = "";
//     req.on("data", (data) => (body += data));

//     req.on("end", async () => {
//       try {
//         const encryptedResponse = decodeURIComponent(body.split("%")[1].split("=")[1]);
//         const decrypted = decrypt(encryptedResponse);

//         const responseObj = Object.fromEntries(
//           decrypted.split("&").map((item) => item.split("="))
//         );

//         const { clientTxnId: txnId, status } = responseObj;

//         const order = await SabPaisaOrder.findOne({ txnId, status: "PENDING" });
//         if (!order) {
//           res.status(404);
//           throw new Error("Order not found or already processed");
//         }

//         if (status === "SUCCESS") {
//           await addMoney(req, res, {
//             userId: order.userId,
//             amount: order.amount,
//             txnId,
//             gateway: "SABPAISA",
//           });

//           order.status = "SUCCESS";
//         } else {
//           order.status = "FAILED";
//         }

//         await order.save();
//         return res.send("Callback processed successfully");
//       } catch (err) {
//         console.error("Callback Decrypt Error:", err.message);
//         return res.status(500).send("Error processing callback");
//       }
//     });
//   } catch (error) {
//     console.error("SabPaisa Callback Error:", error.message);
//     return res.status(500).send("Error in callback");
//   }
// });

// // 🔹 Optional: Server-to-Server Status Check
// exports.checkSabPaisaStatus = asyncHandler(async (req, res) => {
//   try {
//     const { txnId } = req.body;
//     if (!txnId) {
//       res.status(400);
//       throw new Error("Transaction ID is required");
//     }

//     const order = await SabPaisaOrder.findOne({ txnId });
//     if (!order) {
//       res.status(404);
//       throw new Error("Order not found");
//     }

//     // Example Status API
//     const statusResp = await axios.post(
//       process.env.SABPAISA_STATUS_URL,
//       {
//         clientCode: process.env.SABPAISA_CLIENT_CODE,
//         txnId,
//       }
//     );

//     const data = statusResp.data;
//     if (data.status === "SUCCESS" && order.status !== "SUCCESS") {
//       await addMoney(req, res, {
//         userId: order.userId,
//         amount: order.amount,
//         txnId,
//         gateway: "SABPAISA",
//       });
//       order.status = "SUCCESS";
//       await order.save();
//     }

//     return successHandler(res, 200, "Payment status fetched", data);
//   } catch (error) {
//     console.error("Check SabPaisa Status Error:", error.message);
//     res.status(500);
//     throw new Error("Error fetching status");
//   }
// });














const { encryptData, decryptData } = require("../utils/sabpaisaEncryptor");
const crypto = require("crypto");
require("dotenv").config();

const initiatePayment = async (req, res) => {
  try {
    const { payerName, payerEmail, payerMobile, amount } = req.body;

    // Validate required fields
    if (!payerName || !payerEmail || !payerMobile || !amount) {
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      });
    }

    // Generate unique transaction ID
    const clientTxnId = "TXN" + Date.now() + Math.random().toString(36).substr(2, 5);
    
    // Format date as YYYY-MM-DD HH:mm:ss
    const now = new Date();
    const transDate = now.toISOString().slice(0, 19).replace("T", " ");

    console.log("Transaction Details:", {
      clientTxnId,
      transDate,
      payerName,
      payerEmail,
      payerMobile,
      amount
    });

    // Create parameter string in EXACT order required by SabPaisa
    const params = new URLSearchParams();
    params.append('amount', amount);
    params.append('callbackUrl', process.env.SABPAISA_CALLBACK_URL);
    params.append('channelId', 'W');
    params.append('clientCode', process.env.SABPAISA_CLIENT_CODE);
    params.append('clientTxnId', clientTxnId);
    params.append('mcc', process.env.SABPAISA_MCC);
    params.append('payerEmail', payerEmail);
    params.append('payerMobile', payerMobile);
    params.append('payerName', payerName);
    params.append('transDate', transDate);
    params.append('transUserPassword', process.env.SABPAISA_PASSWORD);
    params.append('transUserName', process.env.SABPAISA_USERNAME);

    const paramString = params.toString();
    console.log("Parameter string for encryption:", paramString);

    const encData = encryptData(paramString, process.env.SABPAISA_AUTH_KEY, process.env.SABPAISA_AUTH_IV);

    return res.status(200).json({
      success: true,
      message: "Payment initiation data",
      data: {
        encData,
        clientTxnId,
        clientCode: process.env.SABPAISA_CLIENT_CODE,
        formUrl: process.env.SABPAISA_FORM_URL,
      },
    });

  } catch (error) {
    console.error("Payment initiation error:", error);
    return res.status(500).json({
      success: false,
      message: "Error initiating payment",
      error: error.message || "Unknown error",
    });
  }
};

// Alternative method - Try this if above doesn't work
const initiatePaymentAlternative = async (req, res) => {
  try {
    const { payerName, payerEmail, payerMobile, amount } = req.body;

    const clientTxnId = "TXN" + Date.now();
    const transDate = new Date().toISOString().slice(0, 19).replace("T", " ");

    // Try different parameter order (as per SabPaisa documentation)
    const params = [
      `transUserName=${process.env.SABPAISA_USERNAME}`,
      `transUserPassword=${process.env.SABPAISA_PASSWORD}`,
      `clientCode=${process.env.SABPAISA_CLIENT_CODE}`,
      `clientTxnId=${clientTxnId}`,
      `amount=${amount}`,
      `payerName=${encodeURIComponent(payerName)}`,
      `payerEmail=${payerEmail}`,
      `payerMobile=${payerMobile}`,
      `callbackUrl=${process.env.SABPAISA_CALLBACK_URL}`,
      `channelId=W`,
      `mcc=${process.env.SABPAISA_MCC}`,
      `transDate=${transDate}`
    ].join("&");

    console.log("Alternative parameter string:", params);

    const encData = encryptData(params, process.env.SABPAISA_AUTH_KEY, process.env.SABPAISA_AUTH_IV);

    return res.status(200).json({
      success: true,
      message: "Payment initiation data",
      data: {
        encData,
        clientTxnId,
        clientCode: process.env.SABPAISA_CLIENT_CODE,
        formUrl: process.env.SABPAISA_FORM_URL,
      },
    });

  } catch (error) {
    console.error("Alternative payment error:", error);
    return res.status(500).json({
      success: false,
      message: "Error initiating payment",
      error: error.message || "Unknown error",
    });
  }
};

const sabpaisaCallback = async (req, res) => {
  try {
    const { encResponse } = req.body;
    
    if (!encResponse) {
      return res.redirect(`${process.env.FRONTEND_FAILURE_URL}?error=no_response`);
    }

    const decrypted = decryptData(encResponse, process.env.SABPAISA_AUTH_KEY, process.env.SABPAISA_AUTH_IV);
    const responseParams = new URLSearchParams(decrypted);
    
    const statusCode = responseParams.get('statusCode');
    const clientTxnId = responseParams.get('clientTxnId');
    const txnId = responseParams.get('txnId');
    const message = responseParams.get('message');

    console.log("SabPaisa Callback Response:", Object.fromEntries(responseParams));

    if (statusCode === "0000") {
      return res.redirect(`${process.env.FRONTEND_SUCCESS_URL}?txn=${clientTxnId}&sabpaisaId=${txnId}`);
    } else {
      return res.redirect(`${process.env.FRONTEND_FAILURE_URL}?txn=${clientTxnId}&error=${message || statusCode}`);
    }
  } catch (error) {
    console.error("Callback error:", error);
    return res.redirect(`${process.env.FRONTEND_FAILURE_URL}?error=callback_error`);
  }
};

module.exports = {
  initiatePayment,
  initiatePaymentAlternative, // Export both to test
  sabpaisaCallback
};