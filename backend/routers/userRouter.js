const express = require("express");

const { registerUser, loginUser, verifyUser, logoutUser } = require("../controllers/userController.js");
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/verify", verifyUser);
router.get("/logout", logoutUser);

module.exports = router;
