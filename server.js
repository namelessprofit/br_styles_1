// SERVER-SIDE JAVASCRIPT

//require express in our app
var express = require('express');
// generate a new express app and call it 'app'
var app = express();
var bodyParser = require('body-parser');

// serve static files from public folder
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
// need to add this so that we can accept request payloads from Angular
app.use(bodyParser.json());

// Serve jQuery and bootstrap from a local bower cache avoiding CDNs
// Placing these under /vendor to differentiate them from our own assets
app.use('/vendor', express.static(__dirname + '/bower_components'));


var controllers = require('./controllers');


/**********
 * ROUTES *
 **********/

/*
 * HTML Endpoints
 */

app.get('/', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/templates/:name', function templates(req, res) {
  var name = req.params.name;
  res.sendFile(__dirname + '/views/templates/' + name + '.html');
});

/*
 * JSON API Endpoints
 */

app.get('/api', controllers.api.index);

app.get('/api/stylists', controllers.stylists.index);
app.get('/api/stylists/:stylistId', controllers.stylists.show);
app.post('/api/stylists', controllers.stylists.create);
app.delete('/api/stylists/:stylistId', controllers.stylists.destroy);
app.put('/api/stylists/:stylistId', controllers.stylists.update);

app.get('/api/stylists/:stylistId/appointments', controllers.stylistsAppointments.index);
app.post('/api/stylists/:stylistId/appointments', controllers.stylistsAppointments.create);
app.delete('/api/stylists/:stylistId/appointments/:appointmentId', controllers.stylistsAppointments.destroy);
app.put('/api/stylists/:stylistId/appointments/:appointmentId', controllers.stylistsAppointments.update);

// ALL OTHER ROUTES (ANGULAR HANDLES)
// redirect all other paths to index
app.get('*', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});
