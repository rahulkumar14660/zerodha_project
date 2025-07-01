const User = require("../model/UserModel.js");

const jwt = require("jsonwebtoken")
const isAuthenticated = async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return res.json({
      status: "error",
      message: "token not found",
    });
  }
  const decoded = jwt.verify(token, "my_secret_key");
  const user = await User.findById(decoded.id);
  
  if (!user) {
    return res.json({
      status: "error",
      message: "User is not authenticated",
    });
  }
  req.user = user;
  next();
};

module.exports = {isAuthenticated}