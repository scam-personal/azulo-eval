'use strict'

const express = require('express');
const ProvinceController = require('../controllers/provinceController');

const api = express.Router();

// PROVINCE ROUTES
api.get('/get-provinces', ProvinceController.getProvinces);
api.post('/insert-province', ProvinceController.insertProvince);

module.exports = api;