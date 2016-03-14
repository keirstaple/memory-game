
exports.Memory = function(){
  this.pair1 = {card1Up : false,
                card2Up : false};
  this.pair2 = {card1Up : false,
                card2Up : false};
  this.pair3 = {card1Up : false,
                card2Up : false};
  this.pair4 = {card1Up : false,
                card2Up : false};
  this.pair5 = {card1Up : false,
                card2Up : false};
};

var Entry = require('./../js/memory.js').Card;

$(document).ready(function() {
  $('.card').each(function() {
    $(this).click(function() {
      $(this).children('img').toggle();
    })
  });
});
