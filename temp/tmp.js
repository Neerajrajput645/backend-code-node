// const axios = require("axios");

// const fetchDthPlans = async (req, res) => {
//   try {
//     const operatorCode = 27; // Operator code for DTH
//     const apimember_id = "6371";
//     const api_password = "Paisaplus@123#";

//     const url = "https://planapi.in/api/Mobile/DthPlans";

//     const response = await axios.get(url, {
//       params: {
//         apimember_id,
//         api_password,
//         operatorcode: operatorCode,
//       },
//     });

//     console.log("DTH Plans fetched successfully:", JSON.stringify(response.data, null, 2));

//     return {
//       status: "success",
//       data:  JSON.stringify(response.data, null, 2),
//     };
//   } catch (error) {
//     console.error("Error fetching DTH plans:", error.message);
//     return {
//       status: "failed",
//       message: error.response?.data || "Unable to fetch DTH plans",
//     };
//   }
// };

// module.exports = { fetchDthPlans };

const axios = require("axios");
const successHandler = require("../common/successHandler");
const asyncHandler = require("express-async-handler");
const fetchBillPayment = asyncHandler(async (req, res) => {
  try {
    const { number=8770475416, operator=294 } = req.body;
    const url = "https://api.techember.in/app/reseller/bbps/bill-fetch";

    const response = await axios.post(url, {
      token: process.env.BILLHUB_TOKEN,
      number,
      operator,
    });
    console.log("Bill payment fetched successfully:", response);
    successHandler(req, res, {
      remark: "Success",
      data: response.data
    });
  } catch (error) {
    console.error("Error fetching bill payment:", error.message);
    throw new Error("Unable to fetch bill payment");
  }
});

module.exports = { fetchBillPayment };