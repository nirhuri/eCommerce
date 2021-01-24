const express = require("express");
const router = express.Router();
const { requireSignin, adminMiddleware } = require("../middleware/index");
const { createProduct } = require("../controllers/product");
const path = require('path');
const shortid = require('shortid');
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(path.dirname(__dirname), "uploads"));
  },
  filename: function (req, file, cb) {
    cb(null, shortid.generate() + "-" + file.originalname);
  },
});
const upload = multer({ storage });

router.post(
  "/product/create",
  requireSignin,
  adminMiddleware,
  upload.array("productPicture"),
  createProduct
);
// router.get("/product/getall", getCategories);

module.exports = router;
