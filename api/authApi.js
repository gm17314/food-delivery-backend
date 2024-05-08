const express = require("express");
const { userSignIn, userLogin } = require("../controllers/authController");
const router = express.Router();

router.post("/signup",userSignIn);
router.post("/login",userLogin);

module.exports = router