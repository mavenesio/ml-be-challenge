// Import packages
const express = require('express');
const bodyParser = require('body-parser');
const itemRoutes = require('./routes/item');
var cors = require('cors');
const dotenv = require("dotenv");

dotenv.config();
const app = express();
var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
  }
app.use(cors(corsOptions));
app.use(express.json())

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/api', itemRoutes)

app.listen({port: process.env.PORT || 4000}, () => {
    console.log('server is running');
})