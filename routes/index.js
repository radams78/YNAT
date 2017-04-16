var express = require('express');
var fs = require('fs');
var ttable = require('../src/timetable');

var router = express.Router();

var TIMETABLE_FILE = "./data/timetable.json"
var TITLE = "You Need a Timetable";
var HOURS_IN_WEEK = 7 * 24;

function writeTimetable(timetable) {
	fs.writeFile(TIMETABLE_FILE, JSON.stringify(timetable), (err) => {
		//TODO Error handling
	});
}

function renderTimetablePage(res, timetable) {
	res.render('index', {
		title: TITLE,
		unbudgeted: HOURS_IN_WEEK,
		timetable: timetable
	});
}

function addDataToTimetable(timetable, buffer) {
	let newdata = JSON.parse(buffer.toString());
	for (let category in newdata) {
		timetable[category] = newdata[category];
	}
}

/* GET home page. */
router.get('/', function(req, res) {
	ttable.readTimetable((err, timetable) => {
		if (err) throw err;
		
		renderTimetablePage(res, timetable);
	});
});

/* PUT a value to a category */
router.put('/', function(req, res) {
	ttable.readTimetable((err, timetable) => {
		//TODO Error handling

		req.on('data', (buffer) => {
			addDataToTimetable(timetable, buffer);
		});

		req.on('end', () => {
			writeTimetable(timetable);
		});
	});
});

module.exports = router;
