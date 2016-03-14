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
  var showing = [];
  $('.card').each(function() {
    $(this).click(function() {
      // debugger;
      $(this).children('img').hide();
      $(this).addClass('showing');
      var showingElems = $('.showing').get();
      showing.push(showingElems);

      for (var i = 0; i < showing.length; i++) {
        if ($(this).hasClass('pair' + i) && $(this).hasClass('card1') && $(showing[i]).hasClass('pair' + i) && $(showing[i]).hasClass('card2') || $(this).hasClass('pair' + i) && $(this).hasClass('card2') && $(showing[i]).hasClass('pair' + i) && $(showing[i]).hasClass('card1')) {
          $('.card.pair' + i).children('img').hide();
        }
        else {
          $(this).children('img').show();
        }
      }
    });
    // $(this).click(function() {
    //   $(this).children('img').hide();
    //   $(this).addClass('showing');
    //   var showingElems = $('.showing').get();
    //   showing.push(showingElems);
    // });



  });
});
