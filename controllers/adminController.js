var db = require('../models');


// GET /api/styist
function index(req, res) {
  db.Stylist.find({}, function(err, allStylists) {
    res.json(allStylists);
  });
}

function create(req, res) {
  console.log('body', req.body);

//pull in appointments
  if (req.body.appointments) {
    var appts = req.body.appts.split(',').map(function(item) { return item.trim(); } );
    req.body.appointments = appts;
  }

  db.Stylist.create(req.body, function(err, stylist) {
    if (err) { console.log('error', err); }
    console.log (stylist);
    res.json (stylist);
  });
}

function show(req, res) {
  db.Stylist.findById(req.params.stylistId, function(err, foundStylist) {
    if(err) { console.log('stylistsController.show error', err); }
    console.log('stylistsController.show responding with', foundStylist);
    res.json(foundStylist);
  });
}

function destroy(req, res) {
  db.Stylist.findOneAndRemove({ _id: req.params.stylistId }, function(err, foundStylist){
    res.json(foundStylist);
  });
}

function update(req, res) {
  console.log('updating with data', req.body);
  db.Stylist.findById(req.params.stylistId, function(err, foundStylist) {
    if(err) { console.log('stylistsController.update error', err); }
    foundStylist.name = req.body.name;
    foundStylist.bio = req.body.bio;
    foundStylist.location = req.body.location;
    foundStylist.save(function(err, savedStylist) {
      if(err) { console.log('saving altered stylist failed'); }
      res.json(savedStylist);
    });
  });

}


// exporting public methods
module.exports = {
  index: index,
  create: create,
  show: show,
  destroy: destroy,
  update: update
};
