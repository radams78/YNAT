/**
 * http://usejsdoc.org/
 * 
 * Test suite for timetableio.js
 */

const expect = require('chai').expect;
const fs = require('fs');
const timetableio = require('../src/timetableio');

describe('timetableio', () => {
	it('should read a timetable from a file', (done) => {
		fs.writeFile("./test_timetable.json", '{"Work":10,"Rest":20}', (err) => { // TODO Duplication
			timetableio.readTimetable("./test_timetable.json", (err, ttable) => {
				expect(ttable.toObject()).to.eql({"Work": 10, "Rest": 20});
				done();
			});
		});
	});
	
	it('should return an error when attempting to read a file that is not there', (done) => {
		timetableio.readTimetable("./not_a_real_file", (err, ttable) => {
			expect(err).to.not.be.null;
			done();
		})
	})
});