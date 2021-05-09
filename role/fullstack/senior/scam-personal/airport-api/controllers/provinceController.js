'use strict'

// PROVINCE CONTROLLER

const { province } = require('../db_config');

async function getProvinces(req, res) {
    const provinces = await province.findAll();
    res.status(200).send({
        provinces
    });
}

function insertProvince(req, res) {
    province.create(req.body);
    res.status(200).send({
        message: 'Inserted!'
    });
}

module.exports = {
    getProvinces,
    insertProvince
}