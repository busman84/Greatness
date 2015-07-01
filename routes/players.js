var express = require('express');
var router = express.Router();
var restrict = require('../auth/restrict');

router.get('/', restrict, function(req, res, next) {
	var vm = { 
		title: 'Players', 
		firstName: req.user ? req.user.firstName : null
	}
  res.render('players/index', vm);
});

module.exports = router;
