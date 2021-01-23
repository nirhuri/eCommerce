const express = require("express");
const router = express.Router();
const { requireSignin, adminMiddleware } = require("../middleware/index");
const { createProduct } = require("../controllers/product");

router.post("/product/create", requireSignin, adminMiddleware, createProduct);
// router.get("/product/getall", getCategories);

module.exports = router;
