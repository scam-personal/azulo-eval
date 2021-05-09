'use strict'

const CountryModel = require('./models/country');
const ProvinceModel = require('./models/province');
const LocationModel = require('./models/location');
const OperatorModel = require('./models/operator');
const AirportModel = require('./models/airport');

// INIT DATABASE CONNECTION
const Sequelize = require('sequelize');
const sequelize = new Sequelize('azulo', 'root', 'azulodev', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

// MODELS
const country = CountryModel(sequelize, Sequelize);
const province = ProvinceModel(sequelize, Sequelize);
const location = LocationModel(sequelize, Sequelize);
const operator = OperatorModel(sequelize, Sequelize);
const airport = AirportModel(sequelize, Sequelize);

//ASSOCIATIONS
country.hasMany(province,{foreignKey:'Country_Id', sourceKey:'Id'});
province.belongsTo(country,{foreignKey: 'Country_Id', sourceKey:'Id'});

province.hasMany(location,{foreignKey:'ProvinceOrState_Id', sourceKey:'Id'});
location.belongsTo(province,{foreignKey:'ProvinceOrState_Id', sourceKey:'Id'});

operator.hasMany(airport,{foreignKey:'AirportOperator_Id',sourceKey:'Id'});
airport.belongsTo(operator,{foreignKey:'AirportOperator_Id', sourceKey:'Id'});

location.hasMany(airport,{foreignKey:'Location_Id',sourceKey:'Id'});
airport.belongsTo(location,{foreignKey:'Location_Id', sourceKey:'Id'});

module.exports = {
    sequelize,
    country,
    province,
    location,
    operator,
    airport
}