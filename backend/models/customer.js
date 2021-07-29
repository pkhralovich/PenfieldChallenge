const { DataTypes } = require('sequelize');
const sequelize = require("../utilities/database");

const Customer = sequelize.define("customers", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(45),
        allowNull: false,
        unique: false
    },
    email: {
        type: DataTypes.STRING(45),
        allowNull: false,
        unique: true
    }
}, {
    updatedAt: false,
    createdAt: false
});

module.exports = Customer;