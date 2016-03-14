var moment = require('moment');

exports.Journal = function(){
  this.title = "string";
};

exports.Entry = function(heading, body) {
  this.heading = heading;
  this.body = body;
  this.createdAt = moment().format('LLL');
};

exports.Entry.prototype.getWordCount = function() {
  var wordCountArray = this.body.split(" ");
  this.wordCount = wordCountArray.length;
};

var Entry = require('./../js/journal.js').Entry;

$(document).ready(function() {
  $('.journal-entry').submit(function(event){
    event.preventDefault();
    var heading = $('#heading').val();
    var body = $('#body').val();
    var newEntry = new Entry(heading, body);

    newEntry.getWordCount();

    $('.postGroup').append(
      '<div class="finalPost">' +
    			'<span class="headingPost"></span><br>' +
    			'<span class="entryPost"></span><br>' +
    			'<span class="wordCount"></span><br>' +
    			'<span class="createdAt"></span>' +
    		'</div>'
      );
    $('.headingPost').last().append(newEntry.heading);
    $('.entryPost').last().append(newEntry.body);
    $('.wordCount').last().append(newEntry.wordCount);
    $('.createdAt').last().append(newEntry.createdAt);
  });
});
