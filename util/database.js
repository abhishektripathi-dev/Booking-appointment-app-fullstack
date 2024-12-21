const Sequelize = require("sequelize");

// Create a new Sequelize instance to connect to the database
const sequelize = new Sequelize("node-complete", "root", "password", {
    dialect: "mysql", // Specifies the database dialect (MySQL in this case)
    host: "localhost", // Specifies the host of the database
});

module.exports = sequelize;
