/**
 * http://usejsdoc.org/
 * 
 * Test suite for timetable.js
 */

const expect = require('chai').expect;
const Timetable = require('../src/timetable').Timetable;

describe('Timetable', () => {
	it('should allow us to construct an empty timetable', (done) => {
		let ttable = new Timetable();
		expect(ttable.toObject()).to.eql({});
		done();
	});
	
	it('should throw an error if a Timetable is constructed and the initial data does not have the type Object', (done) => {
		expect(() => new Timetable("Not an Object")).to.throw(TypeError);
		done();
	});
	
	it('should allow us to change a value', (done) => {
		let ttable = new Timetable({"Work": 10});
		ttable.setCategory("Work", 20);
		expect(ttable.toObject()).to.eql({"Work": 20});
		done();
	});
	
	it('should allow us to add a value', (done) => {
		let ttable = new Timetable({});
		ttable.setCategory("Work", 20);
		expect(ttable.toObject()).to.eql({"Work": 20});
		done();
	});
	
	it('should allow us to add a value and change a value simultaneously', (done) => {
		let ttable = new Timetable({"Work": 10, "Rest": 25});
		ttable.setCategories({"Work": 20, "Sleep": 23});
		expect(ttable.toObject()).to.eql({"Work": 20, "Sleep": 23, "Rest": 25});
		done();
	});
	
	it('should allow us to retrieve a JSON representation of the timetable', (done) => {
		let ttable = new Timetable({"Work": 10, "Rest": 25});
		expect(ttable.toJSON()).to.equal('{"Work":10,"Rest":25}');
		done();
	})
});