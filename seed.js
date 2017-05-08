// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require("./models");

stylistList = [];
stylistList.push({
  name: 'Jlo',
  bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore',
  location: 'Grant Ave, San Francisco',
});
stylistList.push({
  name: 'Jlo',
  bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore',
  location: 'Grant Ave, San Francisco',
});
stylistList.push({
  name: 'Jlo',
  bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore',
  location: 'Grant Ave, San Francisco',
});
stylistList.push({
  name: 'Jlo',
  bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore',
  location: 'Grant Ave, San Francisco',
});

var sampleAppointments = [];
sampleAppointments.push({
  name: 'John',
  email: 'john@gmail.com',
  phoneNumber: '123-456-3453',
  date: 'May 15, 2017'
});
sampleAppointments.push({
  name: 'John',
  email: 'john@gmail.com',
  phoneNumber: '123-456-3453',
  date: 'May 15, 2017'
});
sampleAppointments.push({
  name: 'John',
  email: 'john@gmail.com',
  phoneNumber: '123-456-3453',
  date: 'May 15, 2017'
});
sampleAppointments.push({
  name: 'John',
  email: 'john@gmail.com',
  phoneNumber: '123-456-3453',
  date: 'May 15, 2017'
});
sampleAppointments.push({
  name: 'John',
  email: 'john@gmail.com',
  phoneNumber: '123-456-3453',
  date: 'May 15, 2017'
});
sampleAppointments.push({
  name: 'John',
  email: 'john@gmail.com',
  phoneNumber: '123-456-3453',
  date: 'May 15, 2017'
});
sampleAppointments.push({
  name: 'John',
  email: 'john@gmail.com',
  phoneNumber: '123-456-3453',
  date: 'May 15, 2017'
});

// populate each stylists appointment list
stylistList.forEach(function(stylist) {
  stylistList.appointments = sampleAppointments;
});


db.Stylist.remove({}, function(err, stylists) {

  db.Stylist.create(stylistList, function(err, stylists) {
    if (err) {
      return console.log('ERROR', err);
    }
    console.log("all stylists:", stylists);
    console.log("created", stylists.length, "stylists");
    process.exit();
  });

});
