const Sequlize = require('sequelize');

const sequelize = new Sequlize('DB', 'root', 'Azure123', {
    host: '52.151.251.221',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    dialectOptions: {
        encrypt: true
    }
})

module.exports = sequelize;