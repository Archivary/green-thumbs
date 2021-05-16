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

const { Schema, model } = require('mongoose');

const plantSchema = new Schema(
    {
        plantname: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        planttype: {
            type: String,
            required: true,
            unique: false,
            trim: true
        },
        season: {
            // which type to choose for seasons?
            type: String,
            required: true,
            unique: false,
            trim: true,
        },
        highmaintenance: {
            // which type to choose for low or high maintenance?
            type: Boolean,
            required: true,
        },
        waterneeds: {
            // which type to choose for water needs?
            type: String,
            required: true,
            unique: false,
            trim: true
        }

    }
)

module.exports = Plant;