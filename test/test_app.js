/**
 * http://usejsdoc.org/
 */

var cheerio = require('cheerio');
var expect = require('chai').expect;
var fs = require('fs');
var request = require('request');

describe('timetable page', () => {
	it('should contain one table', (done) => {
		request('http://localhost:3000', (err, res, body) => {
			$ = cheerio.load(body);
			expect(res.statusCode).to.equal(200);
			expect($('table').length).to.equal(1);
			done();
		})
	})
});

describe('update', () => {
	it('should update the database after a PUT', (done) => {
		request.put({url: 'http://localhost:3000', 
			body:'{"Work": 10}'}, (err, res, body) => {
			fs.readFile('./data/timetable.json', (err, data) => {
				var timetable = JSON.parse(data);
				expect(timetable.Work).to.equal(10);
			});
		});
		done();
	});
});

//TODO Test for invalid JSON in PUT request