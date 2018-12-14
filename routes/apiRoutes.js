var db = require("../models");

module.exports = function(app) {
  // Display All Medications
  app.get("/api/all", function(req, res) {
    db.medications.findAll({}).then(function(results) {
      res.json(results);
    });
   });

  // Add a Medication
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

  // Update a Medication
  app.put("/api/update/:id", function(req, res) {
    db.medications.update(req.body,
      {
        where: {
          id: req.params.id
        }
      }).then(function(results) {
        res.json(results);
      });
    });

    // Delete a Medication
  app.delete("/api/all/:id", function(req, res) {
    db.medications.destroy(
      {
        where: { 
          id: req.params.id 
      } 
    }).then(function(results) {
      res.json(results);

    });
  });
};