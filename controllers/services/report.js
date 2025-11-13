const asyncHandler = require("express-async-handler");
const Recharge = require("../../models/service/rechargeSchema");
const DTH = require("../../models/service/dthSchema");
const BBPS = require("../../models/service/bbps");
const successHandler = require("../../common/successHandler");

const combinedHistory = asyncHandler(async (req, res) => {
  const { _id } = req.data;
  const {
    serviceType, // 'recharge' | 'dth' | 'bbps' | 'all'
    serviceId,
    startDate,
    endDate,
    number,
    transactionId,
    amount,
  } = req.query;

  try {
    const dateFilter = {};
    if (startDate || endDate) {
      dateFilter.createdAt = {};
      if (startDate) dateFilter.createdAt.$gte = new Date(startDate);
      if (endDate) {
        const end = new Date(endDate);
        end.setHours(23, 59, 59, 999);
        dateFilter.createdAt.$lte = end;
      }
    }

    // Construct base filters
    const baseFilter = {
      userId: _id,
      ...dateFilter,
    };

    if (serviceId) baseFilter.serviceId = serviceId;
    if (number) baseFilter.number = number;
    if (transactionId) baseFilter.transactionId = transactionId;
    if (amount) baseFilter.amount = Number(amount);

    // Prepare containers
    let dthData = [];
    let rechargeData = [];
    let bbpsData = [];

    const promises = [];

    // --- DTH ---
    if (!serviceType || serviceType === "dth" || serviceType === "all") {
      promises.push(
        DTH.find(baseFilter)
          .sort({ createdAt: -1 })
          .lean()
          .then((data) => {
            dthData = data || [];
          })
      );
    }

    // --- Recharge ---
    if (!serviceType || serviceType === "recharge" || serviceType === "all") {
      promises.push(
        Recharge.find(baseFilter)
          .sort({ createdAt: -1 })
          .lean()
          .then((data) => {
            rechargeData = data || [];
          })
      );
    }

    // --- BBPS ---
    if (!serviceType || serviceType === "bbps" || serviceType === "all") {
      promises.push(
        BBPS.find(baseFilter)
          .sort({ createdAt: -1 })
          .lean()
          .then((data) => {
            bbpsData = data || [];
          })
      );
    }

    await Promise.all(promises);

    // ✅ Final structured response
    const finalData = {
      dth: dthData,
      mobile: rechargeData,
      bbps: bbpsData,
    };

    successHandler(req, res, {
      Remarks: "User Combined Recharge History",
      Data: finalData,
    });
  } catch (error) {
    console.error("[COMBINED_HISTORY_ERROR]", error);
    res.status(500).json({
      Error: true,
      Status: false,
      ResponseStatus: 0,
      StatusCode: "Ex500",
      Remarks: "An error occurred while fetching combined recharge history.",
    });
  }
});

module.exports = { combinedHistory };
