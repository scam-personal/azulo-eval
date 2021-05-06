'use strict'

// PROVINCE OR STATE MODEL
module.exports = (sequelize, type) => {
    return sequelize.define('ProvinceOrState', {
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