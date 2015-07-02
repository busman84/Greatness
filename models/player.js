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

module.exports = {
	Player: Player
};