require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const stockRouter = require("./routers/stockRouter.js");
const userRouter = require("./routers/userRouter.js");
const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:5174'], // Allow both
  credentials: true
}));

app.use(bodyParser.json());
app.use(cookieParser());

app.use("/api", userRouter);
app.use("/", stockRouter);

app.listen(PORT, () => {
  console.log("App started!");
  mongoose.connect(uri);
  console.log("DB started!");
});


