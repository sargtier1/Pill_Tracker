// var db = require("../models");

// module.exports = function(app) {
//   // Get all examples
//   app.get("/api/all/meds", function(req, res) {
//     db.medications.findAll({}).then(function(dbMedication) {
//       res.json(dbMedication);

//       // calculation 


//     });
//    });

//   // Create a new example
//   app.post("/api/new/medicine", function(req, res) {
//     db.medications.create(req.body).then(function(dbMedication) {
//       res.json(dbMedication);
//     });
//   });

//   // Delete an example by id
//   app.delete("/api/home/:name", function(req, res) {
//     db.medications.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
//       res.json(dbExample);
//     });
//   });
// };

var db = require("../models");

module.exports = function(app) {
  // Get all meds
  app.get("/api/all", function(req, res) {
    db.medications.findAll({}).then(function(results) {
      res.json(results);
        //calcluations for timeing based on info the user gives us

        // var pillTime = $('#time-input').val().trim();
        // pillTime = moment(pillTime, 'hhmma');
 
        // var addThisTime = $('#hourSpread').val().trim();
 
        // var times1 = moment(pillTime).add(addThisTime, 'H');
        // console.log('New Time is: ' + moment(times1).format(' HH'));
 
        // var times2 = moment(pillTime).add(addThisTime * 2, 'H');
        // console.log('New Time is: ' + moment(times2).format(' H:mm a'));
 
        // var times3 = moment(pillTime).add(addThisTime * 3, 'H');
        // console.log('New Time is: ' + moment(times3).format(' H:mm a'));
 
        // // needs to be editted to send the time to home.handlebars
        // $('#pillTime1').text(moment(times1).format(' h:mm a')); 
        // $('#pillTime2').text(moment(times2).format(' h:mm a'));
        // $('#pillTime3').text(moment(times3).format(' h:mm a'));
    });
   });

  // Add a med
  app.post("/api/new/medicine", function(req, res) {
    db.medications.create({
      id: req.body.id,
      drugName: req.body.drugName,
      startTime: req.body.startTime,
      frequency: req.body.frequency,
      notes: req.body.notes
    }).then(function(results){
      res.json(results);
    });
    });
 

  // Delete a med by id
  app.delete("/api/db/:id", function(req, res) {
    db.medications.destroy({ 
      where: { 
        id: req.params.id 
      } 
    }).then(function() {
      res.end();
    });
  });
};