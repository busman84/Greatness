var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	if (req.user){
		return res.redirect('/players');
	}
  res.render('index', { title: 'GOAT - Login' });
});

module.exports = router;
