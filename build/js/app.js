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

$(document).ready(function() {
  $('.card').each(function() {
    $(this).click(function() {
      $(this).children('img').toggle();
    })
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
