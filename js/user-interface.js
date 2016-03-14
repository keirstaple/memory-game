var Entry = require('./../js/memory.js').Card;

$(document).ready(function() {
  $('.card').each(function() {
    $(this).click(function() {
      $(this).children('img').toggle();
    })
  });
});
