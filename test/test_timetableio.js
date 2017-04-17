/**
 * http://usejsdoc.org/
 * 
 * Test suite for timetableio.js
 */

const expect = require('chai').expect;
const fs = require('fs');
const timetableio = require('../src/timetableio');

const TEST_FILE = "./test_timetable.json";
const DUMMY_FILE = "./not_a_real_file";

describe('timetableio', () => {
	it('should read a timetable from a file', (done) => {
		fs.writeFileSync(TEST_FILE, '{"Work":10,"Rest":20}');
		timetableio.readTimetable(TEST_FILE, (err, ttable) => {
			expect(ttable.toObject()).to.eql({"Work": 10, "Rest": 20});
			fs.unlinkSync(TEST_FILE); // TODO Duplication
			done();
		});
	});
	
	//TODO Use synchronous versions
	
	it('should return an error when attempting to read a file that is not there', (done) => {
		timetableio.readTimetable(DUMMY_FILE, (err, ttable) => {
			expect(err).to.not.be.null;
			done();
		});
	});
});