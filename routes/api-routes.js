var db = require("../models");

module.exports = function(app){
    app.get("/api/scores", function(req, res) {
        db.Score.findAll({}).then(function(scoreBoard) {
          res.json(scoreBoard);
        });
      });
      app.post("/api/users", function(req, res){
        db.User.create({
          email: req.body.email
        }).then(function(dbUser){
          res.json(dbUser)
        })
      })
}