const express = require('express');
require('dotenv').config();
require('./db/mongo');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use('/public', express.static(path.join(__dirname, 'uploads')));
app.use(cors());

const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin/auth');
const categoryRoutes = require('./routes/category');
const productRoutes = require('./routes/product');
const cartRoutes = require('./routes/cart');

app.use('/api', authRoutes);
app.use('/api', adminRoutes);
app.use('/api', categoryRoutes);
app.use('/api', productRoutes);
app.use('/api', cartRoutes);

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server is running on port ${port}` )
})