var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/brstyles_test");

var Stylist = require('./stylist');

module.exports.Stylist = Stylist;
module.exports.Appointment = require('./appointment');
