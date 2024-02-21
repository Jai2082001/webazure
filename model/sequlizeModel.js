const Sequlize = require('sequelize');
const sequelize = require('../database')

const Product = sequelize.define('students', {
    id: {
        type: Sequlize.INTEGER ,
        primaryKey: true
    }   ,
    title: Sequlize.STRING,
    price: Sequlize.DOUBLE
})

module.exports = Product;