$(document).ready(function() {
  $('#tweet-text').on('input', function () {
    let charLeft = 140 - ($(this).val().length);
    let elementCounter = $(this).closest('form').find('.counter');
    
    if(elementCounter) {
      elementCounter.val(charLeft);
    }

    if(elementCounter.val() < 0) {
      $(elementCounter).css({'color': 'red'});
    } else {
      $(elementCounter).css({'color': '#4F4F4F'});
    }

  })
});