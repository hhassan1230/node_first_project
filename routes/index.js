var express = require('express');
var router = express.Router();

var people = {
	'dan': {name: 'dan', location: 'nyc', specialty: 'ios', fav: 'Godfather'},
	'dillon': {name: 'dillon', location: 'chicago', specialty: 'python', fav: 'Star Wars'},
	'erica': {name: 'erica', location: 'boston', specialty: 'teacher', fav: 'Soul Train'},
	'alicia': {name: 'alicia', location: 'nyc', specialty: 'ios', fav: 'Studio Jibbly'}
};

/* GET home page. */
router.get('/', function(req, res, next) {
	var guest = req.query.guest;
	// guest = guest.toLowerCase();

	console.log('GUEST == ' + guest);
	var date = new Date();
	var person = people[guest];
  res.render('home', person);
});

module.exports = router;
