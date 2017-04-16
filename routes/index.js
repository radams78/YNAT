var express = require('express');
var render = require('../src/render');
var ttableio = require('../src/timetableio');
var ttable = require('../src/timetable');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	ttableio.readTimetable((err, timetable) => {
		if (err) throw err;
		
		render.renderTimetablePage(res, timetable);
	});
});

/* PUT a value to a category */
router.put('/', function(req, res) {
	ttable.readTimetable((err, timetable) => {
		//TODO Error handling

		req.on('data', (buffer) => {
			ttable.addData(timetable, buffer);
		});

		req.on('end', () => {
			ttableio.writeTimetable(timetable);
		});
	});
});

module.exports = router;
