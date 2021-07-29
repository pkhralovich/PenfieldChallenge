var Sequelize = require("sequelize");

const config = {
    host: process.env.DB_HOST,
    dialect: "mysql"
}
const dbConnection = new Sequelize(process.env.DB_NAME, 
                                process.env.DB_USER, 
                                process.env.DB_PASS, 
                                config);

module.exports = dbConnection;