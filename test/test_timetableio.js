/**
 * http://usejsdoc.org/
 * 
 * Test suite for timetableio.js
 */

const expect = require('chai').expect;
const fs = require('fs');
const Timetable = require('../src/timetable').Timetable;
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
	
	it('should return an error when reading a file that does not contain valid JSON', (done) => {
		fs.writeFileSync(TEST_FILE, "Not valid JSON");
		timetableio.readTimetable(TEST_FILE, (err, ttable) => {
			expect(err).to.not.be.null;
			fs.unlinkSync(TEST_FILE);
			done();
		});
	});
	
	it('should return an error when reading a file in which a value is not a number', (done) => {
		fs.writeFileSync(TEST_FILE, '{"Work":10,"Sleep":"Not a number"}');
		timetableio.readTimetable(TEST_FILE, (err, ttable) => {
			expect(err).to.not.be.null;
			fs.unlinkSync(TEST_FILE);
			done();
		});
	});
	
	it('should write a timetable then read back the same timetable', (done) => {
		let ttable = new Timetable({"Work": 20, "Sleep": 10});
		timetableio.writeTimetable(TEST_FILE, ttable, (err) => {
			timetableio.readTimetable(TEST_FILE, (err, ttable2) => {
					expect(ttable2).to.eql(ttable);
					fs.unlinkSync(TEST_FILE);
					done();
			});
		});
	});
});