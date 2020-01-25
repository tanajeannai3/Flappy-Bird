var db = require("../models");

module.exports = function(app){
    app.get("/api/scores", function(req, res) {
        db.Score.findAll({}).then(function(scoreBoard) {
          res.json(scoreBoard);
        });
      });
}