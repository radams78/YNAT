/**
 * http://usejsdoc.org/
 */

var fs = require('fs');

var TIMETABLE_FILE = "./data/timetable.json"

function readTimetable(callback) {
	fs.readFile(TIMETABLE_FILE, 'utf8', function(err, data) {
		if (err) {
			callback(err, null);
		}
		
		callback(null, JSON.parse(data));
	})
}

function writeTimetable(timetable) {
	fs.writeFile(TIMETABLE_FILE, JSON.stringify(timetable), (err) => {
		//TODO Error handling
	});
}

module.exports = {readTimetable, writeTimetable};