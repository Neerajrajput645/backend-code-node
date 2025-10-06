const OTP = require("../models/otpSchema");

const getAllOTPs = async (req, res) => {
  try {
    const otps = await OTP.find();
    res.status(200).json(otps);
    } catch (error) {
    res.status(500).json({ message: "Error fetching OTPs", error });
  }
};

module.exports = { getAllOTPs };
