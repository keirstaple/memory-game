exports.Journal = function(title, body){
  this.title = title;
}

exports.Entry = function(heading, body) {
  this.heading = heading;
  this.body = body;
}

exports.Entry.prototype.getWordCount = function() {
  var wordCountArray = this.body.split(" ");
  this.wordCount = wordCountArray.length;
}
