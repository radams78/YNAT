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
});