var express = require('express');
var fs = require('fs');
var router = express.Router();

var TIMETABLE_FILE = "data/timetable.json"
var TITLE = "You Need a Timetable";
var HOURS_IN_WEEK = 7 * 24;

/* GET home page. */
router.get('/', function(req, res, next) {
	fs.readFile(TIMETABLE_FILE, 'utf8', function(err, data) {
		if (err) throw err;
		
		var timetable = JSON.parse(data);
		var unbudgeted = HOURS_IN_WEEK;
		
		res.render('index', { 
			title: TITLE,
			unbudgeted: unbudgeted,
			timetable: timetable
			});
	});
});

module.exports = router;
