const { HoldingsModel } = require("../model/HoldingsModel.js");

const { PositionsModel } = require("../model/PositionsModel.js");
const { OrdersModel } = require("../model/OrdersModel.js");
const User = require("../model/UserModel.js");
const getAllHoldings = async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
};

const getAllPositions = async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
};

const postNewOrder = async (req, res) => {
  try {
    const user = req.user;
    if (!user) {
      return res.status(401).json({ status: "error", message: "Unauthorized" });
    }
    let newOrder = new OrdersModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });
    const savedOrder = await newOrder.save();
    // console.log(savedOrder)
    user.stocksBought.push(savedOrder._id);
    await user.save();

    console.log(user);
    return res.json({ status: "success", message: "Order saved!" });
  } catch (err) {
    console.error("Order creation error:", err);
    res.status(500).json({ status: "error", message: "Server error" });
  }
};

const deleteOrder = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedOrder = await OrdersModel.findByIdAndDelete(id);

    if (!deletedOrder) {
      return res.status(404).json({ message: "Order not found" });
    }

    // Remove order reference from user's stocksBought
    const user = await User.findOneAndUpdate(
      { email: req.user.email },
      { $pull: { stocksBought: id } }
    );

    res.status(200).json({ message: "Order deleted successfully" });
  } catch (err) {
    console.error("Delete order error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

const getUserStocks = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.user.email }).populate(
      "stocksBought"
    );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    console.log(user);

    return res.json({
      stocksBought: user.stocksBought,
    });
  } catch (err) {
    console.error("Error in getUserStocks:", err);
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  getAllHoldings,
  getAllPositions,
  postNewOrder,
  deleteOrder,
  getUserStocks,
};
