var expect = require('chai').expect;

var Memory = require('./../js/memory.js').Memory;

describe('Memory', function(){
	it('will make card1Up and card2Up false because they start facing down', function(){
		var newMemory = new Memory();
		expect(newMemory.pair1.card1Up).to.equal(false);
	});
});
