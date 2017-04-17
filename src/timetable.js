/**
 * http://usejsdoc.org/
 * 
 * Operations on the timetable model
 */

/**
 * Add or change the entries in the timetable
 * 
 * @param timetable {Object} - timetable to be updated.  The categories are the keys in timetable, with the number of hours as the value.
 * @param newdata {Object} - categories to be added or modified.  Each category to be added or modified is a key in newdata, with the number of hours as the value.
 */
//TODO Create timetable class
//TODO Remove global state

class Timetable {
	constructor (initial_data) {
		this.timetable = (initial_data ? initial_data : {}); 
	}
	
	setCategory(category, time) {
		this.timetable[category] = time;
	}
	
	getTimetable() {
		return this.timetable;
	}
	
	addData(newdata) {
		for (let category in newdata) {
			this.setCategory(category, newdata[category]);
		}
	}
	
	toJSON()  {
		return JSON.stringify(this.timetable);
	}
}

module.exports = { Timetable };