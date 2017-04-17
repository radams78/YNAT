/**
 * http://usejsdoc.org/
 */

var render = require('../src/render');
var expect = require('chai').expect;

class MockResponse {
	constructor() {	
	}
	
	render(title, data) {
		this.title = title;
		this.data = data;
	}
}

describe('renderTimetablePage', () => {
	it('should render a simple page when given an empty timetable', (done) => {
		let mock_res = new MockResponse();
		render.renderTimetablePage(mock_res, {});
		expect(mock_res.title).to.equal('index'); // TDOO Duplication
		console.log(JSON.stringify(mock_res.data));
		expect(mock_res.data).to.eql({
			title: "You Need a Timetable", // TODO Duplication
			unbudgeted: 168, // TODO Duplication
			timetable: {}
		});
		done();
	});
});