/**
 * Parameters for the timetable page
 * 
 * http://usejsdoc.org/
 */

let TITLE = "You Need A Timetable";

let HOURS_IN_WEEK = 7 * 24;

function render(res, timetable) {
	res.render('index', {
		title: TITLE,
		unbudgeted: HOURS_IN_WEEK,
		timetable: timetable
	});
}

module.exports = { TITLE, render };