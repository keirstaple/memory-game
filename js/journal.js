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
