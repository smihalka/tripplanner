const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost/tripplanner', {
    pool: {
        maxConnections: 5,
        minConnections: 0,
        maxIdleTime: 30
    }
});

module.exports = db;
