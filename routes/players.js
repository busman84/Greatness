var express = require('express');
var router = express.Router();
var restrict = require('../auth/restrict');

router.get('/', restrict, function(req, res, next) {
	var vm = { 
		title: 'Players', 
		orderId: req.session.orderId,
		firstName: req.user ? req.user.firstName : null
	}
  res.render('players/index', vm);
});

module.exports = router;
