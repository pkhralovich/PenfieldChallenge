const { DataTypes } = require('sequelize');
const sequelize = require("../utilities/database");

const Sale = sequelize.define("sales", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    customer: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: false
    }
}, {
    updatedAt: false,
    createdAt: false
});

module.exports = Sale;