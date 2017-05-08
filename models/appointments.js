var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var AppointmentSchema = new Schema({
  name: String,
  email: String,
  phoneNumber: String,
  date: String
});

var Appointment = mongoose.model('Appointment', AppointmentSchema);

module.exports = Appointment;
