'use strict'

// COUNTRY CONTROLLER

const { country } = require('../db_config');

async function getCountries(req, res) {
    const countries = await country.findAll();
    res.status(200).send({
        countries
    });
}

function insertCountry(req, res) {
    country.create(req.body);
    res.status(200).send({
        message: 'Inserted!'
    });
}

async function updateCountry(req, res) {
    await country.update(req.body, {
        where: { Id: req.params.id }
    });
    res.status(200).send({
        message: 'Updated!'
    });
}

async function deleteCountry(req, res) {
    await country.destroy({
        where: { Id: req.params.id }
    });
    res.status(200).send({
        message: 'Deleted!'
    });
}

module.exports = {
    getCountries,
    insertCountry,
    updateCountry,
    deleteCountry
}