/**
 * Methods for file input and output to timetable database.
 */

const fs = require('fs');
const timetable = require('./timetable');

/**
 * Filename of timetable database
 */
const FILENAME = "./data/timetable.json"

/**
 * Asynchronously read the timetable from the database file.
 * 
 * @param callback {function} - code to be executed after database loads.  Takes two parameters, err and data.
 * 		If an error occurs while loading the database, then err will contain the error and data will be null.
 *      If the database loads successfully, then err will be null and data will contain the timetable.
 *      Every category in the timetable is a key in data, with the number of hours as the value.
 */
function readTimetable(callback) {
	fs.readFile(FILENAME, 'utf8', function(err, data) {
		let ttable = new timetable.Timetable();
		
		if (err) {
			callback(err, null);
		}
		
		ttable.timetable = JSON.parse(data);
		callback(null, ttable);
	})
}

/**
 * Write the timetable to the database file.  If an error occurs while writing, then the error is thrown.
 * 
 * @param timetable {Object} - timetable to be written.  Every category is a key in timetable, with the number of hours as the value.
 */
//TODO Return the error.
function writeTimetable(timetable) {
	console.log("Writing ", JSON.stringify(timetable.timetable));
	fs.writeFile(FILENAME, JSON.stringify(timetable.timetable), (err) => {
		if (err) {throw err;}
	});
}

module.exports = {FILENAME, readTimetable, writeTimetable};