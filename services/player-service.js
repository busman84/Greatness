var Player = require('../models/player').Player;

exports.addPlayer = function(player, next){
	var newPlayer = new Player({
		playerName: player.playerName,
		nickname: player.nickname,
		signatureMove: player.signatureMove,
		team: player.team,
		number: player.number
	});

	newPlayer.save(function(err){
		if (err){
			return next(err);
		}
		next(null);
	});
};
