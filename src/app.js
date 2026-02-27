const express = require('express');
const apiRouter = require('./routes/index.routes');
const errorHandler = require('./middlewares/error.middleware');

const app = express();

app.use(express.json());

// Versioned API
app.use('/api/v1', apiRouter);

// Global Error Middleware
app.use(errorHandler);

module.exports = app;