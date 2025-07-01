const { HoldingsModel } = require("../model/HoldingsModel.js");

const { PositionsModel } = require("../model/PositionsModel.js");
const { OrdersModel } = require("../model/OrdersModel.js");

const getAllHoldings = async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
};

const getAllPositions = async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
};

const postNewOrder = async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  newOrder.save();

  res.send("Order saved!");
};

const deleteOrder = async (req, res) => {
  const id = req.params.id;
  const deletedOrder = await OrdersModel.findByIdAndDelete(id);

  if (!deletedOrder) {
    return res.status(404).json({ message: "Order not found" });
  }

  res.status(200).json({ message: "Order deleted successfully" });
};

module.exports = {
  getAllHoldings,
  getAllPositions,
  postNewOrder,
  deleteOrder,
};
