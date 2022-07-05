const dotenv = require('dotenv').config();
const colors = require('colors');
const path = require('path');
const express = require('express');
const app = express();
const ejsLayout = require('express-ejs-layouts');
const mongoDBConnect = require('./config/db');

//Body Data
app.use(express.json());
app.use(express.urlencoded({extended : false}));

//Environmet Variables
const PORT = process.env.SERVER_PORT || 5000;

//Mongo server connection
mongoDBConnect();

//ejs setup
app.set('view engine', 'ejs');
app.set('layout', 'layouts/app');
app.use(ejsLayout);

//Static Folders
app.use('/assets', express.static(path.join(__dirname + '/assets/')));

//routes
app.use('/student', require('./routes/studentRoute'));

//server listen
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`.bgGreen.black));