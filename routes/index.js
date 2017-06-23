const router = require('express').Router();
const Hotel = require('../models/hotel');
const Activity = require('../models/activity');
const Restaurant = require('../models/restaurant');
module.exports = router;

router.get('/', (req, res, next) => {
  let data = {};

  Hotel.findAll()
    .then(results=>{
      data.hotels = results;
      return  Activity.findAll()
    }).then(results=>{
      data.activities = results;
      return Restaurant.findAll()
    })
    .then(results=>{
    data.resturants = results;
    console.log(data.hotels);
    res.render('index', {hotels: data.hotels,resturants: data.resturants,activities: data.activities});
  }).catch(next)

});
