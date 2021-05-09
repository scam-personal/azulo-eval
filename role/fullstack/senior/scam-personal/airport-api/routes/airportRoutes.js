'use strict'

const express = require('express');
const AirportController = require('../controllers/airportController');

const api = express.Router();

// AIRPORT ROUTES
api.get('/get-airports', AirportController.getAirports);
api.post('/insert-airport', AirportController.insertAirport);
api.put('/airport/change-operator', AirportController.changeOperator);
api.put('/airports/change-priorities', AirportController.changePriorities);

module.exports = api;