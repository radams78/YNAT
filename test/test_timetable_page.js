/**
 * Test suite for timetable_page.js
 */

const expect = require('chai').expect;

const Timetable = require('../src/timetable').Timetable;
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
	
	/**
	 * Custom assertion that asserts the timetable page has been passed to render
	 * with the given values for unbudgeted and ttable.
	 * 
	 * @param unbudgeted {Number} - Number of hours unbudgeted
	 * @param ttable {Timetable} - Timetable to be rendered
	 */
	assertPageRendered(unbudgeted, ttable) {
		expect(this.view).to.equal(timetable_page.VIEW);
		expect(this.data).to.eql({
			title: timetable_page.TITLE,
			unbudgeted: unbudgeted,
			timetable: ttable
		})
	}
}

describe('renderTimetablePage', () => {
	before((done) => {
		this.mock_res = new MockResponse();
		done();
	});
	
	it('should render a simple page when given an empty timetable', (done) => {
		timetable_page.render(this.mock_res, new Timetable());
		this.mock_res.assertPageRendered(7 * 24, {});		
		done();
	});
	
	it('should render the appropriate page when given a timetable with one category', (done) => {
		timetable_page.render(this.mock_res, new Timetable({"Work": 10}));
		this.mock_res.assertPageRendered(7 * 24 - 10, {"Work": 10});		
		done();
	});
	
	it('should render the appropriate page when given a timetable with one category', (done) => {
		timetable_page.render(this.mock_res, new Timetable({"Work": 10, "Home": 20}));
		this.mock_res.assertPageRendered(7 * 24 - 10 - 20, {"Work": 10, "Home": 20});		
		done();
	});

	it('should throw an exception if res is not a ServerRequest', (done) => {
		expect(() => timetable_page.render("Not a ServerRequest", new Timetable())).to.throw(TypeError);
		done();
	});
	
	it('should throw an exception if timetable is not a Timetable', (done) => {
		expect(() => timetable_page.render(this.mock_res, "Not a Timetable")).to.throw(TypeError);
		done();
	});
});