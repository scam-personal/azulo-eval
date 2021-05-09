'use strict'

// LOCATION MODEL

const Location = (sequelize, type) => {
    return sequelize.define('Location', {
        Id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Longitude: type.FLOAT,
        Latitude: type.FLOAT
    }, {
        timestamps: false,
        freezeTableName: true,
    });
};

module.exports = Location;