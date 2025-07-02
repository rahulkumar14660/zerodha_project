require("dotenv").config();
const { isAuthenticated } = require("../middlewares/authMiddleware.js");
const express = require("express");

const router = express.Router();
const {
  getAllHoldings,
  getAllPositions,
  postNewOrder,
  deleteOrder,
  getUserStocks,
} = require("../controllers/stockControllers.js");

router.get("/allHoldings", isAuthenticated, getAllHoldings);
router.get("/allPositions", isAuthenticated, getAllPositions);
router.post("/newOrder", isAuthenticated, postNewOrder);
router.post("/deleteOrder/:id", isAuthenticated, deleteOrder);
router.get("/getStocks", isAuthenticated, getUserStocks);

module.exports = router;
