/**
 * http://usejsdoc.org/
 */

const expect = require('chai').expect;

const timetable_page = require('../src/timetable_page');

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
		
		timetable_page.render(mock_res, {});
		
		expect(mock_res.view).to.equal(timetable_page.VIEW);
		
		console.log(JSON.stringify(mock_res.data));
		expect(mock_res.data).to.eql({
			title: timetable_page.TITLE, 
			unbudgeted: timetable_page.HOURS_IN_WEEK, 
			timetable: {}
		});
		
		done();
	});
});