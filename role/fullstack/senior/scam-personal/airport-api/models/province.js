'use strict'

// PROVINCE OR STATE MODEL
const Province = (sequelize, type) => {
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
}

module.exports = Province;