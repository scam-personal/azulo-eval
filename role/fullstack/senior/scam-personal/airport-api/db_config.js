'use strict'

const CountryModel = require('./models/country');

// INIT DATABASE CONNECTION
const Sequelize = require('sequelize');
const sequelize = new Sequelize('azulo', 'root', 'azulodev', {
    host: 'localhost',
    dialect: 'mysql'
});

// MODELS
const country = CountryModel(sequelize, Sequelize);

module.exports = {
    country
}