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
	
	it('should throw a TypeError if setCategory is called and category is not a string', (done) => {
		let ttable = new Timetable({"Work": 10});
		expect(() => ttable.setCategory(ttable, 20)).to.throw(TypeError);
		done();
	});
	
	it('should throw a TypeError if setCategory is called and time is not a number', (done) => {
		let ttable = new Timetable({"Work": 10});
		expect(() => ttable.setCategory("Work", "Not a number")).to.throw(TypeError);
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
	
	it('should throw a TypeError if setCategories is called and newdata is not an Object', (done) => {
		let ttable = new Timetable({"Work": 10, "Rest": 25});
		expect(() => ttable.setCategories("Not an Object")).to.throw(TypeError);
		done();
	});
	
	it('should throw a TypeError if setCategories is called and a value in newdata is not a number', (done) => {
		let ttable = new Timetable({"Work": 10, "Rest": 25});
		expect(() => ttable.setCategories({"Work": 20, "Sleep": "Not a Number"})).to.throw(TypeError);
		done();
	});
	
	it('should allow us to retrieve a JSON representation of the timetable', (done) => {
		let ttable = new Timetable({"Work": 10, "Rest": 25});
		expect(ttable.toJSON()).to.equal('{"Work":10,"Rest":25}');
		done();
	})
});