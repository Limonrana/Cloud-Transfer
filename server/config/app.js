const express = require('express');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

// Database Configure
require('./db')();

// Express Build in Middleware
const corsOptions = {
    origin: process.env.ALLOWED_CLINTS.split(',')
}
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// All Routes list define
app.use('/api', require('../routes/web'));

app.get('/', (req, res) => {
    res.send('Welcome to cloud server app')
});

// Express Error Handler Define for all error handle
const errorHander = (err, req, res, next) => {
    if (res.headersSent) {
        return next(err);
    }
    res.status(500).json({ error: { message: err } });
};

app.use(errorHander);

module.exports = app;

