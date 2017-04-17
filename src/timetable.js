/**
 * http://usejsdoc.org/
 * 
 * Operations on the timetable model
 */

//TODO Remove global state throughout app

const HOURS_IN_WEEK = 7 * 24;

/**
 * A timetable.  The Model class for the app.
 */
class Timetable {
	/**
	 * Creates a timetable with the given initial data.
	 * 
	 * @param initial_data {Object} - initial contents of the timetable.  Each category is a key in initial_data,
	 *    with the initial number of hours as its value.  May be omitted for an empty timetable.
	 */
	constructor (initial_data) {
		this.timetable = (initial_data ? initial_data : {}); 
	}

	/**
	 * Add a category, or change the value of a category.
	 * 
	 * @param category {String} - Category to be added or changed
	 * @param time {Number} - New number of hours
	 */
	setCategory(category, time) {
		this.timetable[category] = time;
	}
	
	/**
	 * Returns the contents of the timetable.
	 * 
	 * @returns Contents of timetable as an object.  Each category is a key in this object, with the number of hours as its value.
	 * @type Object
	 */
	getTimetable() {
		return this.timetable;
	}
	
	getUnbudgeted() {
		let unbudgeted = HOURS_IN_WEEK;
		console.log("Unbudgeted: ", unbudgeted);
		for (let category in this.timetable) {
			unbudgeted -= this.timetable[category];
			console.log("Unbudgeted now: ", unbudgeted);
		}
		console.log("Final unbudgeted: ", unbudgeted);
		return unbudgeted;
	}
	
	/**
	 * Add or modify several categories.
	 * 
	 * @param newdata {Object} - Categories to be added or modified.  Each category is a key in newdata, with the new number of hours as its value.
	 */
	addData(newdata) {
		for (let category in newdata) {
			this.setCategory(category, newdata[category]);
		}
	}
	
	/**
	 * Return a JSON representation of the timetable.
	 * 
	 * @returns JSON representation of the timetable
	 * @type String
	 */
	toJSON()  {
		return JSON.stringify(this.timetable);
	}
}

module.exports = { Timetable, HOURS_IN_WEEK };