/**
 * http://usejsdoc.org/
 */

var cheerio = require('cheerio');
var expect = require('chai').expect;
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