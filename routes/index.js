var express = require('express');
var timetable_page = require('../src/timetable_page');
var timetableio = require('../src/timetableio');
var ttable = require('../src/timetable');

var router = express.Router();

function handle_error(res, err, message) {
	if (err) {
		res.render('error', {
			message: message,
			error: err
		});
	}
}

/* GET home page. */
router.get('/', function(req, res) {
	console.log("GET request");
	timetableio.readTimetable((err, timetable) => {
		handle_error(res, err, "Error while reading timetable");
		
		timetable_page.render(res, timetable);
	});
});

/* POST a value to a category */
router.post('/', function(req, res) {
	console.log("POST request");
	console.log(req.body);
	timetableio.readTimetable((err, timetable) => {
		handle_error(res, err, "Error while reading timetable");
		
		timetable.addData(req.body);
		timetableio.writeTimetable(timetable, (err) => {
			handle_error(res, err, "Error while writing timetable");
			
			res.statusCode = 200;
			res.end();
		});
	});
});

module.exports = router;
