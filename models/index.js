var mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/brtsyles_test");


var Stylist = require('./stylist');

module.exports.Stylist = Stylist;
module.exports.Appointment = require('./appointment');
