const { DataTypes } = require('sequelize');
const sequelize = require("../utilities/database");

const Favourite = sequelize.define("voucher", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    code: {
        type: DataTypes.STRING(30),
        allowNull: false,
        unique: true
    },
    expirationDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    sale: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
    }
}, {
    updatedAt: false,
    createdAt: false
});

module.exports = Favourite;