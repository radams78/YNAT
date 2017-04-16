/**
 * http://usejsdoc.org/
 */

function addData(timetable, newdata) {
	for (let category in newdata) {
		console.log("Adding " , category, " = ", newdata[category]);
		timetable[category] = newdata[category];
	}
}

module.exports = { addData };