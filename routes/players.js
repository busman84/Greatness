var express = require('express');
var router = express.Router();
var playerService = require('../services/player-service');
var restrict = require('../auth/restrict');
var Player = require('../models/player').Player;


router.get('/', restrict, function(req, res, next) {
  Player.find(function(err, players){
    if (err) {
      return res.send(err);
    }
  console.log(players)
	var vm = { 
		title: 'Players', 
		orderId: req.session.orderId,
		firstName: req.user ? req.user.firstName : null,
    players: players
	}
  res.render('players/index', vm);
  });
});

router.get('/create', restrict, function(req, res, next) {
  var vm = {
    title: 'Create a Player',
    orderId: req.session.orderId,
    firstName: req.user ? req.user.firstName : null
  };
  res.render('players/create', vm);
});

router.post('/create', function(req, res, next) {
  playerService.addPlayer(req.body, function(err) {
    if (err) {
    	console.log(err);
      var vm = {
        title: 'Create an account',
        input: req.body,
        error: err
      };
      return res.render('players/create', vm);
    }
    req.login(req.body, function(err){
    	res.redirect('/players');
    });
  });
});

module.exports = router;
