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
		fs.writeFile(timetableio.FILENAME, '{"Work":10,"Rest":20}', (err) => { // TODO Duplication
			timetableio.readTimetable((err, ttable) => {
				expect(ttable.toObject()).to.eql({"Work": 10, "Rest": 20});
				done();
			});
		});
	});
});