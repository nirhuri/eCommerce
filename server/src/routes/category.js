const express = require('express');
const router = express.Router();
const { requireSignin, adminMiddleware } = require('../middleware/index');
const { addCategory, getCategories  } = require('../controllers/category');

router.post('/category/create', requireSignin, adminMiddleware, addCategory);
router.get('/category/getall', getCategories);

module.exports = router;