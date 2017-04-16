var express = require('express');
var fs = require('fs');
var router = express.Router();

var TIMETABLE_FILE = "./data/timetable.json"
var TITLE = "You Need a Timetable";
var HOURS_IN_WEEK = 7 * 24;

function readTimetable(callback) {
	fs.readFile(TIMETABLE_FILE, 'utf8', function(err, data) {
		if (err) {
			callback(err, null);
		}
		
		callback(null, JSON.parse(data));
	})
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
	readTimetable((err, timetable) => {
		if (err) throw err;
		
		renderTimetablePage(res, timetable);
	});
});

/* PUT a value to a category */
router.put('/', function(req, res) {
	readTimetable((err, timetable) => {
		//TODO Error handling
		req.on('data', (buffer) => {
			addDataToTimetable(timetable, buffer);
		});
		req.on('end', () => {
			fs.writeFile(TIMETABLE_FILE, JSON.stringify(timetable), (err) => {
			});
		});
	});
});

module.exports = router;
