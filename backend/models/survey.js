const { DataTypes } = require('sequelize');
const sequelize = require("../utilities/database");
const Joi = require("joi");

const Survey = sequelize.define("survey_response", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    sale: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
    },
    satisfaction: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    description: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    quality: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    size: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    repeat: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    comment: {
        type: DataTypes.STRING(300),
        allowNull: true
    }
}, {
    updatedAt: false,
    createdAt: false
});

Survey.validation = function() {

    
    return Joi.object({
        sale: Joi.number().integer().required(),
        satisfaction: Joi.number().integer().min(1).max(10).required(),
        description: Joi.number().integer().min(1).max(10).required(),
        quality: Joi.number().integer().min(1).max(10).required(),
        size: Joi.number().integer().min(1).max(10).required(),
        repeat: Joi.number().integer().min(1).max(10).required(),
        comment: Joi.any()
    });
}

module.exports = Survey;