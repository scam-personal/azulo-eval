'use strict'

// AIRPORT MODEL

const Airport = (sequelize, type) => {
    return sequelize.define('Airport', {
        Id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Name: type.STRING,
        AirportCode: type.STRING,
        PriorityOrder: type.INTEGER
    }, {
        timestamps: false,
        freezeTableName: true,
    });
};

module.exports = Airport;