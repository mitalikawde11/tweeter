// Adding 'input' event handler on textarea
$(document).ready(function() {
  $('#tweet-text').on('input', function () {
    // getting the texts length 
    let charLeft = 140 - ($(this).val().length);
    // getting 'output' (counter) element using ' this' traverse up and then go down to search 'output' ele
    let elementCounter = $(this).closest('form').find('.counter');
    
    if (elementCounter) {
      // updating counter 'output' value
      elementCounter.val(charLeft);
    }

    // if user exceeding char limit(140 char) then aading css class for diplaying negative val in red color
    if (elementCounter.val() < 0) {
      $(elementCounter).addClass("negativeVal");

    } else {
      $(elementCounter).removeClass("negativeVal");
    }
  })
});