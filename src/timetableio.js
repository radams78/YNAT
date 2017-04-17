/**
 * http://usejsdoc.org/
 */

const fs = require('fs');

const FILENAME = "./data/timetable.json"

function readTimetable(callback) {
	fs.readFile(FILENAME, 'utf8', function(err, data) {
		if (err) {
			callback(err, null);
		}
		
		callback(null, JSON.parse(data));
	})
}

function writeTimetable(timetable) {
	console.log("Writing ", JSON.stringify(timetable));
	fs.writeFile(FILENAME, JSON.stringify(timetable), (err) => {
		if (err) {throw err;}
	});
}

module.exports = {FILENAME, readTimetable, writeTimetable};