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

module.exports = {readTimetable};