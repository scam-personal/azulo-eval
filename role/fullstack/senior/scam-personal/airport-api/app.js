'use strict'

const express = require('express');

var app = express();

// LOAD ROUTES
const countryRoutes = require('./routes/countryRoutes');

// MIDDLEWARES
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// CORS

// ROUTES
// JUST TEST ROUTE - REMOVE IT WHEN GO TO PRODUCTION
app.get('/api/tests', (req, res) => {
    res.status(200).send({
        message: "Tests actions on server. OK!"
    });
});

app.use('/api', countryRoutes);

// EXPORT
module.exports = app;