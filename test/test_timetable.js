/**
 * http://usejsdoc.org/
 * 
 * Test suite for timetable.js
 */

const expect = require('chai').expect;
const Timetable = require('../src/timetable').Timetable;

describe('Timetable', () => {
	it('should be possible to construct an empty timetable', (done) => {
		let ttable = new Timetable();
		expect(ttable.toObject()).to.eql({});
		done();
	})
	
	it('should throw an error if a Timetable is constructed and the initial data does not have the type Object', (done) => {
		expect(() => new Timetable("Not an Object")).to.throw(TypeError);
		done();
	})
	
});