/**
 * Test suite for timetable_page.js
 */

const expect = require('chai').expect;

const ttable = require('../src/timetable');
const timetable_page = require('../src/timetable_page');

/**
 * Mock object for http.ServerResponse class
 */
class MockResponse {
	constructor() {	
	}
	
	render(view, data) {
		this.view = view;
		this.data = data;
	}
}

describe('renderTimetablePage', () => {
	it('should render a simple page when given an empty timetable', (done) => {
		let mock_res = new MockResponse();
		
		timetable_page.render(mock_res, new ttable.Timetable());
		
		expect(mock_res.view).to.equal(timetable_page.VIEW);
		
		console.log(JSON.stringify(mock_res.data));
		expect(mock_res.data).to.eql({
			title: timetable_page.TITLE, 
			unbudgeted: ttable.HOURS_IN_WEEK, 
			timetable: {}
		});
		
		done();
	});
//TODO Better naming system for modules
	
	it('should render the appropriate page when given a timetable with one category', (done) => {
		let mock_res = new MockResponse();
		
		timetable_page.render(mock_res, new ttable.Timetable({"Work": 10}));
		
		expect(mock_res.view).to.equal(timetable_page.VIEW);
		
		expect(mock_res.data).to.eql({
			title: timetable_page.TITLE,
			unbudgeted: ttable.HOURS_IN_WEEK - 10,
			timetable: {"Work": 10}
		});
		
		done();
	});
});