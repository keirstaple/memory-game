(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

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

},{"./../js/memory.js":2}],2:[function(require,module,exports){

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

},{}]},{},[1]);
