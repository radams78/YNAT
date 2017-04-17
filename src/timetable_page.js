/**
 * Parameters for the timetable page
 * 
 * http://usejsdoc.org/
 */

let TITLE = "You Need A Timetable";

let HOURS_IN_WEEK = 7 * 24;

let VIEW = 'timetable_page';

function render(res, timetable) {
	res.render(VIEW, {
		title: TITLE,
		unbudgeted: HOURS_IN_WEEK,
		timetable: timetable
	});
}

module.exports = { TITLE, HOURS_IN_WEEK, VIEW, render };