const Sequelize = require('sequelize');
const {sequelize} = require('./index');

const Record = sequelize.define('record', {
    filingStatus: {
        type: Sequelize.STRING,
    },
    taxableIncome: {
        type: Sequelize.DOUBLE,
    },
    purchaseDate: {
        type: Sequelize.DATE,
    },
    saleDate: {
        type: Sequelize.DATE,
    },
    capitalGain: {
        type: Sequelize.DOUBLE,
    },
    totalCapitalGainTax: {
        type: Sequelize.DOUBLE,
    },
    capitalGainAfterTax: {
        type: Sequelize.DOUBLE,
    },
    capitalGain: {
        type: Sequelize.DOUBLE
    }
})


module.exports = Record;