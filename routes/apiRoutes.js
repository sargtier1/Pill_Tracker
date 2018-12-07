var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/home", function(req, res) {
    // db.medications.findAll({}).then(function(dbMedication) {
    //   res.json(dbMedication);

    //   // calculation 
   });

  // Create a new example
  app.post("/api/medicine", function(req, res) {
    db.medications.create(req.body).then(function(dbMedication) {
      res.json(dbMedication);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.medications.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
