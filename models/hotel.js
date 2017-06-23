const Sequelize = require('sequelize');
const db = require('./index');
const Place = require('./place');

const Hotel = db.define('hotel', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    num_stars: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    amenities: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

Hotel.belongsTo(Place);
module.exports = Hotel;
