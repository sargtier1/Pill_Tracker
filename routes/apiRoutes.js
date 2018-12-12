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