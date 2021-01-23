const express = require("express");
const {
  signup,
  signin,
  requireSignin,
} = require("../../controllers/admin/auth");
const {
  validateSignupRequest,
  validateSigninRequest,
  isRequestValidated,
} = require("../../validators/auth");

const router = express.Router();

router.post("/admin/signin", validateSigninRequest, isRequestValidated, signin);
router.post("/admin/signup", validateSignupRequest, isRequestValidated, signup);

module.exports = router;
