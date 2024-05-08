const express = require("express");
const { productByCategory, productById, createNewProduct } = require("../controllers/productController");
const { verifyToken, verifyTokenAdmin } = require("../middlewares/verifyToken");

const router = express.Router();

router.get("/",verifyToken,productByCategory);
router.get("/find/:id",verifyToken,productById);
router.post("/products",verifyTokenAdmin,createNewProduct)

module.exports = router