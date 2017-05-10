// stylistsAppointmentsController
var db = require('../models');

// app.get('/api/stylists/:stylistIdappointments', controllers.stylistsAppointments.index);
function index(req, res) {
  db.Stylist.findById(req.params.stylistId, function(err, foundStylist) {
    console.log('responding with appointments:', foundStylist.appointments);
    res.json(foundStylist.appointments);
  });
}

// POST '/api//:stylistId/appointments'
function create(req, res) {
  db.Stylist.findById(req.params.stylistId, function(err, foundStylist) {
    console.log(req.body);
    var newAppointment = new db.Appointment(req.body);  // dangerous, in a real app make sure to validate the incoming data
    foundStylist.appointments.push(newAppointment);
    foundStylist.save(function(err, savedStylist) {
      console.log('newAppointment created: ', newAppointment);
      res.json(newAppointment);  // responding with just the appointment
    });
  });
}

// app.delete('/api/stylists/:stylistId/appointments/:appointmentId', controllers.stylistsAppointments.destroy);
function destroy(req, res) {
  db.Stylist.findById(req.params.stylistId, function(err, foundStylist) {
    console.log(foundStylist);
    // we've got the stylist, now find the appointment within it
    var correctAppointment = foundStylist.appointments.id(req.params.appointmentId);
    if (correctAppointment) {
      correctAppointment.remove();
      // resave the stylist now that the appointment is gone
      foundStylist.save(function(err, saved) {
        console.log('REMOVED ', correctAppointment.name, 'FROM ', saved.appointments);
        res.json(correctAppointment);
      });
    } else {
      res.send(404);
    }
  });

}

//app.put('/api/stylists/:stylistId/appointments/:appointmentId', controllers.stylistsAppointments.update);
function update(req, res) {
  db.Stylist.findById(req.params.stylistId, function(err, foundStylist) {
    console.log(foundStylist);
    // we've got the stylist, now find the appointment within it
    var correctAppointment = foundStylist.appointments.id(req.params.appointmentId);
    if (correctAppointment) {
      console.log(req.body);
      correctAppointment.name = req.body.name;
      correctAppointment.email = req.body.email;
      correctAppointment.phoneNumber = req.body.phoneNumber;
      correctAppointment.date = req.body.date;
      foundStylist.save(function(err, saved) {
        console.log('UPDATED', correctAppointment, 'IN ', saved.appointments);
        res.json(correctAppointment);
      });
    } else {
      res.send(404);
    }
  });

}


module.exports = {
  index: index,
  create: create,
  update: update,
  destroy: destroy
};
