const express = require('express');
const morgan = require('morgan');

// Custom module imports for api/v1
const apiV1 = require('./api/v1');

// Importing custom middlewares
const { status404Handler, status500Handler, status400Handler } = require('./middlewares');

// Creating a instance of express
const app = express();

// Configuring all middlewares
app.use(morgan('dev'));

// Mounting /api/v1 with the apiV1 module
app.use('/api/v1', apiV1);

// Error handlers
app.use(status400Handler);
app.use(status500Handler);
app.use(status404Handler);

module.exports = app;
