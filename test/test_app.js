/**
 * http://usejsdoc.org/
 */

var expect = require('expect');
var request = require('request');

describe('homepage', function(){
	it('should respond to GET', function(){
		request('https://localhost:3000', function(err, res, body) {
			expect(res.statusCode).to.equal(200);
		});
	});
});