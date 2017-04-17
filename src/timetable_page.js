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
const HOURS_IN_WEEK = 7 * 24;

/**
 * View to be used when rendering timetable page
 */
const VIEW = 'timetable_page';

/**
 * Render the timetable page
 * 
 * @param res {ServerResponse} - Stream to send the rendered page to
 * @param timetable {Object} - Timetable to be rendered.  Each category should be a key of timetable, with the number of hours as the associated value
 */
function render(res, timetable) {
	res.render(VIEW, {
		title: TITLE,
		unbudgeted: timetable.getUnbudgeted(),
		timetable: timetable.getTimetable()
	});
}

module.exports = { TITLE, VIEW, render };