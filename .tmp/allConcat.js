
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

// Plugin pulled from http://james.padolsey.com/javascript/shuffling-the-dom/ to allow DOM shuffling//
(function($){

    $.fn.shuffle = function() {

        var allElems = this.get(),
            getRandom = function(max) {
                return Math.floor(Math.random() * max);
            },
            shuffled = $.map(allElems, function(){
                var random = getRandom(allElems.length),
                    randEl = $(allElems[random]).clone(true)[0];
                allElems.splice(random, 1);
                return randEl;
           });

        this.each(function(i){
            $(this).replaceWith($(shuffled[i]));
        });

        return $(shuffled);

    };

})(jQuery);
//////////////////

$(document).ready(function() {
  $('.card').shuffle();
  $('.card').each(function() {
    $(this).click(function() {
      $(this).children('img').toggle();
    })
  });
});
