'use strict'

// OPERATOR MODEL

const Operator = (sequelize, type) => {
    return sequelize.define('Operator', {
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

module.exports = Operator;