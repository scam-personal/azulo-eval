'use strict'

// COUNTRY MODEL
const Country = (sequelize, type) => {
    return sequelize.define('Country', {
        Id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Name: type.STRING
    }, {
        timestamps: false,
        freezeTableName: true,
    });
};
module.exports = Country;