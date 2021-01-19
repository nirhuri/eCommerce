const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
require('./db/mongo');

const app = express();

app.use(bodyParser.json());

const userRoutes = require('./routes/user');

app.use('/api', userRoutes)

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server is running on port ${port}` )
})