const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
require('./db/mongo');

const app = express();

app.use(bodyParser.json());

const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin/auth');

app.use('/api', authRoutes);
app.use('/api', adminRoutes);

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server is running on port ${port}` )
})