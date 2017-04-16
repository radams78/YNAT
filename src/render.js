/**
 * http://usejsdoc.org/
 */

var TITLE = "You Need a Timetable";
var HOURS_IN_WEEK = 7 * 24;

function renderTimetablePage(res, timetable) {
	res.render('index', {
		title: TITLE,
		unbudgeted: HOURS_IN_WEEK,
		timetable: timetable
	});
}

module.exports = { renderTimetablePage };