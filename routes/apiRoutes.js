var db = require("../models");
var Joi = require('joi');

module.exports = function(app) {
  // Get all examples
  app.get("/api/all/meds", function(req, res) {
    db.medications.findAll({}).then(function(dbMedication) {
      res.json(dbMedication);

      // calculation 


    });
   });

  // Create a new example
<<<<<<< HEAD
  app.post("/api/examples", function(req, res) {
    var schema = Joi.object().keys({
      username: Joi.string().alphanum().min(3).max(30).required(),
      password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
      email: Joi.string().email({ minDomainAtoms: 2 }).required(),
    });

    var result = Joi.validate({ username: 'abc', email: 'email@email.com' }, schema);
    

    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
=======
  app.post("/api/new/medicine", function(req, res) {
    db.medications.create(req.body).then(function(dbMedication) {
      res.json(dbMedication);
>>>>>>> 68d67b73f9d51926bb6a101fd309b45b74bde4c0
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.medications.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
