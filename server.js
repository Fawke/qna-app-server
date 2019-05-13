const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { MONGODB_URL, MONGODB_DBNAME } = require('./config');

// Custom module imports for api/v1
const apiV1 = require('./api/v1');

// Importing custom middlewares
const { status404Handler, status500Handler, status400Handler } = require('./middlewares');

// Establishing a connection to MongoDB
mongoose
	.connect(`${MONGODB_URL}/${MONGODB_DBNAME}}`, { useNewUrlParser: true })
	.then(() => console.log('conneted to the database'))
	.catch(e => console.log(`can't connect to the database :: ${e}`));

// Creating a instance of express
const app = express();

// Configuring all middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());

// Mounting /api/v1 with the apiV1 module
app.use('/api/v1', apiV1);

// Error handlers
app.use(status400Handler);
app.use(status500Handler);
app.use(status404Handler);

module.exports = app;
