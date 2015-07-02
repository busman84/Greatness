var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var playerService = require('../services/player-service');

var playerSchema = new Schema({
	playerName: {type:String, required: 'Please add a player name'},
	nickame: {type:String}, 
	signatureMove: {type:String}, 
	team: {type:String, required: 'Please enter the players team'}, 
	number: {type:Number, required: 'Please enter the players number'}
});


var Player = mongoose.model('Player', playerSchema);

playerSchema.statics.findById = function(id, cb) {
    return this.findOne({'_id' : id })
    .exec(cb);
};

playerSchema.statics.findAll = function(beers, cb) {
    return this.findAll({'players' : players})
    .exec(cb);
};

module.exports = {
	Player: Player
};