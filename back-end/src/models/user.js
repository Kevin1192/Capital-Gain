const Sequelize = require('sequelize');
const {sequelize} = require('./index');

const User = sequelize.define('user', {
    username: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    }, 
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
})


module.exports = User;