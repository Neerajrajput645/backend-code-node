const express = require("express");
const {
  createSabPaisaOrder,
  SabPaisaCallback,
  checkSabPaisaStatus,
} = require("../../controllers/subPaisaPayment");
const { adminTokenVerify, tokenVerify } = require('../../common/tokenVerify');


const router = express.Router();

router.post("/create", tokenVerify, createSabPaisaOrder);
router.post("/callback", SabPaisaCallback); // SabPaisa webhook
router.post("/status", tokenVerify, checkSabPaisaStatus);

module.exports = router;