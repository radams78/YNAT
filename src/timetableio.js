/**
 * Methods for file input and output to timetable database.
 */

const fs = require('fs');
const timetable = require('./timetable');

/**
 * Filename of timetable database
 */
const FILENAME = "./data/timetable.json"

//TODO Write synchronous versions
	
/**
 * Asynchronously read the timetable from the database file.
 * 
 * @param callback {function} - code to be executed after database loads.  Takes parameters (String err, Timetable timetable).  
 * 		If an error occurs while loading the database, then err will contain the error and timetable will be null.
 *      If the database loads successfully, then err will be null and timetable will contain the timetable.
 */
function readTimetable(filename, callback) {
	fs.readFile(filename, 'utf8', (err, data) => {
		if (err) {
			callback(err, null);
			return;
		}
		
		var ttable;
		try {
			ttable = new timetable.Timetable(JSON.parse(data));
		} catch(err) {
			callback(err, null);
			return;
		}

		callback(null, ttable);
	});
}

/**
 * Write the timetable to the database file.  If an error occurs while writing, then the error is thrown.
 * 
 * @param ttable {Timetable} - timetable to be written
 * @param callback {function} - code to be executed after writing is complete.  Takes parameter (Error err) which
 *    receives any error that occurs during writing.
 */
//TODO Return the error.
function writeTimetable(filename, ttable, callback) {
	var ttablejson;
	try {
		ttablejson = ttable.toJSON();
	} catch (err) {
		callback(err);
		return;
	}
	
	console.log("Writing ", ttablejson);
	fs.writeFile(filename, ttablejson, (err) => {
		callback(err);
	});
}

module.exports = {FILENAME, readTimetable, writeTimetable};