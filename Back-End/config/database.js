const Sequelize = require('sequelize')
const env = process.env.NODE_ENV || 'development'
const config = require('./config')[env]

const db_EGY = new Sequelize(config.database_1, config.username, config.password, config);

const db_MAR = new Sequelize(config.database_2, config.username, config.password, config);

module.exports = { db_EGY, db_MAR };