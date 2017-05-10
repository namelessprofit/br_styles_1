var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/brtsyles_test");


var Stylist = require('./stylist');

module.exports.Stylist = Stylist;
module.exports.Appointment = require('./appointment');
