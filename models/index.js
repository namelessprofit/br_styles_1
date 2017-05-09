var mongoose = require("mongoose");
    mongoose.connect( process.env.MONGODB_URI || "https://git.heroku.com/sleepy-dawn-50943.git" );

var Stylist = require('./stylist');

module.exports.Stylist = Stylist;
module.exports.Appointment = require('./appointment');
