var express = require('express');
var timetable_page = require('../src/timetable_page');
var timetableio = require('../src/timetableio');
var ttable = require('../src/timetable');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	console.log("GET request");
	timetableio.readTimetable((err, timetable) => {
		if (err) throw err;
		
		timetable_page.render(res, timetable);
	});
});

/* POST a value to a category */
router.post('/', function(req, res) {
	console.log("POST request");
	console.log(req.body);
	timetableio.readTimetable((err, timetable) => {
		//TODO Error handling
		
		ttable.addData(timetable, req.body);
		timetableio.writeTimetable(timetable);
			
		res.statusCode = 200;
		res.end();
	});
});

module.exports = router;
