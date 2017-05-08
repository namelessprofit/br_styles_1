var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/br-styles_test");

var Stylist = require('./stylist');

module.exports.Stylist = Stylist;
module.exports.Appointment = require('./appointment');
