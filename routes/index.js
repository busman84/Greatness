var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	if (req.user){
		return res.redirect('/players');
	}
	var vm = {
		title : 'GOAT - Login',
		error: req.flash('error')
	};
  res.render('index', vm);
});

module.exports = router;
