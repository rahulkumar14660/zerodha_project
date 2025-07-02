const User = require("../model/UserModel.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      status: "error",
      message: "please enter all the fields",
    });
  }

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).json({
      status: "error",
      message: "User not found",
    });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(401).json({
      status: "error",
      message: "Invalid password",
    });
  }

  const token = jwt.sign({ id: user._id }, "my_secret_key", {
    expiresIn: "3d",
  });

  return res
    .status(200)
    .cookie("token", token, {
      expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      httpOnly: true,
      sameSite: "lax", // Add this line
      secure: false,    // Add this line (set to true if using HTTPS)
    })
    .json({
      user: user,
      token: token,
    });
};

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({
        status: "error",
        message: "Please enter all the fields",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    const token = jwt.sign({ id: user._id }, "my_secret_key", {
      expiresIn: "3d",
    });

    return res
      .status(200)
      .cookie("token", token, {
        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        httpOnly: true,
        sameSite: "lax", // Add this line
        secure: false,    // Add this line (set to true if using HTTPS)
      })
      .json({
        user: user,
        token: token,
      });
  } catch (err) {
    console.log(err);
  }
};

const verifyUser = async (req, res) => {
  const { token } = req.cookies;
  if (!token) {
    return res.json({ status: "error", message: "No token found" });
  }

  try {
    const decoded = jwt.verify(token, "my_secret_key");
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.json({ status: "error", message: "Invalid user" });
    }

    res.json({ status: "success", user });
  } catch (error) {
    res.json({ status: "error", message: "Token is invalid" });
  }
};

const logoutUser = async (req, res) => {
  res
    .cookie("token", "", { expires: new Date(0), httpOnly: true })
    .json({ status: "success", message: "Logged out successfully" });
};

module.exports = { registerUser, loginUser, verifyUser, logoutUser };
