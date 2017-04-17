/**
 * Parameters for the timetable page
 * 
 * http://usejsdoc.org/
 */

/**
 * Title for the page, to be displayed in both TITLE and H1 tags.
 */
const TITLE = "You Need A Timetable";

/**
 * Number of hours in a week
 */
const HOURS_IN_WEEK = require('./parameters').HOURS_IN_WEEK;

/**
 * View to be used when rendering timetable page
 */
const VIEW = 'timetable_page';

/**
 * Render the timetable page
 * 
 * @param res {ServerResponse} - Stream to send the rendered page to
 * @param ttable {Timetable} - Timetable to be rendered.
 */
function render(res, ttable) {
	res.render(VIEW, {
		title: TITLE,
		unbudgeted: ttable.unbudgeted,
		timetable: ttable.toObject()
	});
}

module.exports = { TITLE, VIEW, render };