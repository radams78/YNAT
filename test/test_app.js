/**
 * http://usejsdoc.org/
 */

var cheerio = require('cheerio');
var expect = require('chai').expect;
var fs = require('fs');
var request = require('request');

describe('homepage', function(){
	it('should respond to GET', function(done){
		request('http://localhost:3000', function(err, res, body) {
			expect(res.statusCode).to.equal(200);
			done();
		});
	});
	
	it('should contain one table', function(done){
		request('http://localhost:3000', function(err, res, body) {
			//TODO Combine into one test
			$ = cheerio.load(body);
			expect($('table').length).to.equal(1);
			done();
		})
	})
});

describe('update', function(){
	it('should update the database after a PUT', function(done) {
		request.put({url: 'http://localhost:3000', body:'{"Work": 10}'}, function(err, res, body) {
			fs.readFile('./data/timetable.json', function(err, data) {
				var timetable = JSON.parse(data);
				expect(timetable.Work).to.equal(10);
			});
		});
		done();
	});
});

//TODO Test for invalid JSON in PUT request