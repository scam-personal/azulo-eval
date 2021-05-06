'use strict'

const express = require('express');
const CountryController = require('../controllers/countryController');

const api = express.Router();

// COUNTRY ROUTES
api.get('/get-countries', CountryController.getCountries);
api.post('/insert-country', CountryController.insertCountry);
api.put('/update-country/:id', CountryController.updateCountry);
api.delete('/delete-country/:id', CountryController.deleteCountry);

module.exports = api;