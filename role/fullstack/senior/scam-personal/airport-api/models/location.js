'use strict'

// LOCATION MODEL

module.exports = (sequelize, type) => {
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