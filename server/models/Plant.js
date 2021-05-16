const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Plant extends Model { }

Plant.init(
    {
        // define an id column
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        // image: {

        // },
        type: {

        },
        season: {

        },
        maintenance: {

        },
        waterneeds: {

        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'plant'
    }
);

module.exports = Plant;