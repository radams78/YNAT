var express = require('express');
var timetable_page = require('../src/timetable_page');
var timetableio = require('../src/timetableio');

var router = express.Router();

/**
 * If err is an error, then display the error page.  Otherwise, do nothing.
 * 
 * @param res {http.ServerResponse} - Response stream
 * @param err {Error} - Error
 * @param message {String} - Message indicating where the error occurred
 */
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
	timetableio.readTimetable("./data/timetable.json", (err, ttable) => {
		handle_error(res, err, "Error while reading timetable");
		
		timetable_page.render(res, ttable);
	});
});

/* POST a value to a category */
router.post('/', function(req, res) {
	console.log("POST request");
	console.log(req.body);
	timetableio.readTimetable("./data/timetable.json", (err, ttable) => {
		handle_error(res, err, "Error while reading timetable");
		
		ttable.setCategories(req.body);
		timetableio.writeTimetable("./data/timetable.json", ttable, (err) => {
			handle_error(res, err, "Error while writing timetable");
			
			res.statusCode = 200;
			res.end();
		});
	});
});

module.exports = router;
