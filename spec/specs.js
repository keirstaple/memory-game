var expect = require('chai').expect;

var Journal = require('./../js/journal.js').Journal;

var Entry = require('./../js/journal.js').Entry;

describe("Journal", function() {
	it('should create a journal object', function() {
		var testJournal = new Journal('test title', 'test body');
		expect(testJournal.title).to.equal('test title');
	});
});

describe("Entry", function() {
	it('should creat a journal entry object', function() {
		var testEntry = new Entry('test heading', 'test body');
		expect(testEntry.heading).to.equal('test heading');
		expect(testEntry.body).to.equal('test body');
	});

	it('should get the word count', function() {
			var testEntry = new Entry('test heading', 'test body');
			testEntry.getWordCount();
			expect(testEntry.wordCount).to.equal(2);
	});
});
