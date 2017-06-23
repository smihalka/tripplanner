const Sequelize = require('sequelize');
const db = require('./index');
const Place = require('./place');

const Restaurant = db.define('restaurant', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cuisine: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

Restaurant.belongsTo(Place);
module.exports = Restaurant;
