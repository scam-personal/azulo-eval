'use strict'
const { QueryTypes } = require('sequelize');
// AIRPORT CONTROLLER

const { airport, sequelize } = require('../db_config');

async function getAirports(req, res) {
    const airports = await airport.findAll();
    res.status(200).send({
        airports
    });
}

function insertAirport(req, res) {
    airport.create(req.body);
    res.status(200).send({
        message: 'Inserted!'
    });
}

async function changeOperator(req, res) {
    const resQuery = await sequelize.query(`UPDATE Airport SET AirportOperator_Id = ${req.body.AirportOperator_Id} WHERE (ID=${req.body.Id})`, { type: QueryTypes.UPDATE });
    if (resQuery)
        res.status(200).send({
            message: "Updated!"
        });
    else
        res.status(200).send({
            message: "Error al insertar"
        });
}

function changePriorities(req, res) {
    const airports = req.body;
    airports.forEach(airportItem => {
        airport.update({ PriorityOrder: airportItem.PriorityOrder }, { where: { Id: airportItem.Id } })
    });
    res.status(200).send({
        message: "Priorities change!"
    });
}

module.exports = {
    getAirports,
    insertAirport,
    changeOperator,
    changePriorities
}