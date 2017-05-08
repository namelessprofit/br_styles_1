var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Appointment = require('./appointment');

var StylistSchema = new Schema({
  name: String,
  bio: String,
  location: String ,
  appointments: [Appointment.schema]
});

var Stylist = mongoose.model('Stylist', StylistSchema);

module.exports = Stylist;
