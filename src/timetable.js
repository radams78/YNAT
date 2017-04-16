/**
 * http://usejsdoc.org/
 */

function addData(timetable, buffer) {
	let newdata = JSON.parse(buffer.toString());
	for (let category in newdata) {
		timetable[category] = newdata[category];
	}
}

module.exports = { addData };