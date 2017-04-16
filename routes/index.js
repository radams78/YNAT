var express = require('express');
var render = require('../src/render');
var ttableio = require('../src/timetableio');
var ttable = require('../src/timetable');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	console.log("GET request");
	ttableio.readTimetable((err, timetable) => {
		if (err) throw err;
		
		render.renderTimetablePage(res, timetable);
	});
});

/* POST a value to a category */
router.post('/', function(req, res) {
	console.log("POST request");
	console.log(req.body);
	ttableio.readTimetable((err, timetable) => {
		//TODO Error handling
		
		ttable.addData(timetable, req.body);
		ttableio.writeTimetable(timetable);
			
		res.statusCode = 200;
		res.end();
	});
});

module.exports = router;
