var mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI || "https://sleepy-dawn-50943.herokuapp.com/" );

var Stylist = require('./stylist');

module.exports.Stylist = Stylist;
module.exports.Appointment = require('./appointment');
