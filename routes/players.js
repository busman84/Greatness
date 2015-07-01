var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('players/index', { title: 'Players' });
});

module.exports = router;
