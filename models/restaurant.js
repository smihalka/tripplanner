const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost/tripplanner');
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

console.log(db)

Restaurant.belongsTo(Place);

module.exports = Restaurant;
