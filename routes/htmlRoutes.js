var db = require("../models");

module.exports = function(app) {
  // Load index page when first brought to website
  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // route to sign up page 
  app.get("/register", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("register", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  //add prescription page
  app.get("/home/add", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("addPrescription", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // route to display and manage prescriptions
  app.get("/home", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("home", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  //loads page of a single prescription
  app.get("/home/p", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("prescription", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
