require("dotenv").config();
const { isAuthenticated } = require("../middlewares/authMiddleware.js");
const express = require("express");

const router = express.Router();
const {
  getAllHoldings,
  getAllPositions,
  postNewOrder,
  deleteOrder,
} = require("../controllers/stockControllers.js");

router.get("/allHoldings", isAuthenticated, getAllHoldings);
router.get("/allPositions", isAuthenticated, getAllPositions);
router.post("/newOrder", isAuthenticated, postNewOrder);
// router.post("/deleteOrder", deleteOrder);

module.exports = router;
