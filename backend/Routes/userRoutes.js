const express = require("express");
const { LoginUser, RegisterUser, LogoutUser, forgotPassword, resetPassword, getUserDetails } = require("../Controllers/userController");
const { isAuthenticated } = require("../Middleware/auth");
const router = express.Router();

router.route("/login").post(LoginUser)
router.route("/register").post(RegisterUser)
router.route("/logout").get(LogoutUser)
router.route("/password/forgot").post(forgotPassword)
router.route("/resetPassword/:token").put(resetPassword)
router.route("/profile").get(isAuthenticated, getUserDetails)

module.exports = router;