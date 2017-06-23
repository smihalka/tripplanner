var Promise = require('bluebird');
var db = require('./models');
var Place = require('./models/place');
var Hotel = require('./models/hotel');
var Restaurant = require('./models/restaurant');
var Activity = require('./models/activity');

var data = {
  hotels: [
    {name: "Andaz Wall Street", place: {address: "75 Wall St", city: "New York", state: "NY", phone: "123-456-7890", location: [40.705137, -74.007624]}, num_stars: 4, amenities: "Pool, Free Wi-Fi" },
  ]
