/**
 * Test suite for app.js
 */

const cheerio = require('cheerio');
const expect = require('chai').expect;
const fs = require('fs');
const request = require('request');
const timetableio = require('../src/timetableio')

/**
 * URL for the server
 */
const HOSTURL = "http://localhost:3000";

describe('timetable page', () => {
	it('should contain one table', (done) => {
		request(HOSTURL, (err, res, body) => {
			let $ = cheerio.load(body);
			expect(res.statusCode).to.equal(200);
			expect($('table').length).to.equal(1);
			done();
		})
	})
});

describe('update', () => {
	it('should update the database after a PUT', (done) => {
		request.post({url: HOSTURL, 
			json: {Work: 10}}, (err, res, body) => {
			fs.readFile(timetableio.FILENAME, (err, data) => {
				console.log(data.toString());
				let timetable = JSON.parse(data);
				expect(timetable.Work).to.equal(10);
				done();
			});
		});
	});
});

//TODO Test for invalid JSON in PUT request