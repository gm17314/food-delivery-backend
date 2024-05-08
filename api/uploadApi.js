const express = require("express");
const router = express.Router();
const {verifyToken} = require("../middlewares/verifyToken");
const { upload, uploadImage } = require("../controllers/uploadController");

router.post('/image/upload',verifyToken,upload.single("image"),uploadImage)


module.exports = router