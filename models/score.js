module.exports = function(sequelize, DataTypes) {
    var Score = sequelize.define("Score", {
        name: DataTypes.STRING, 
        score: DataTypes.INTEGER
    });
    return Score; 
}