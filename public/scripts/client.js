/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Create the HTML structure dynamically for the tweet
const createTweetElement = function(tweetData) {
  let $tweet = $(`
    <article class="tweet">
      <header>
        <div>
          <img src=${tweetData.user.avatars} alt="profile picture">
          <div>${tweetData.user.name}</div>
        </div>
        <div class="handle">${tweetData.user.handle}</div>
      </header>
      <p>${tweetData.content.text}</p>
      <footer>
        <div>${timeago.format(tweetData.created_at)}</div>
        <div>
          <i class="fa-solid fa-flag fa-xs"></i>
          <i class="fa-solid fa-retweet fa-xs"></i>
          <i class="fa-solid fa-heart fa-xs"></i>
        </div>
      </footer>
    </article>
  `);
  
  return $tweet;
};

const renderTweets = function(tweets) {
  // loops through tweets
  for (const tweet of tweets) {
    // calls createTweetElement for each tweet
    let $tweetHtml = createTweetElement(tweet);
    // takes return value and appends it to the tweets container
    $('#tweets-container').prepend($tweetHtml);
  }
};

// fetching tweets from '/tweets' page using ajax GET request
const loadTweets = function () {
  console.log("loading tweets...");
  $.ajax("/tweets/", { method: "GET" })
  .then(function (tweets) {
    renderTweets(tweets);
  });
};

$(document).ready(function() {
  // form submission using jquery
  // Add an event listener for submit(form) and prevent its default behaviour
  $('#new-tweet-submit').on('submit', function(event) {
    event.preventDefault();
    // serialize the form data
    const $serializedData = $(this).serialize();
    console.log($serializedData);
    
    // Form validation
    if (!$('#tweet-text').val()) {
      $('#pError').html("Tweet content is not present").addClass("errorMsg");
      return;
    } else if ($('#tweet-text').val().length > 140) {
      $('#pError').html("Tweet content is too long (140 charater limit)!").addClass("errorMsg");
      return;
    } else {
      $('#pError').html("").removeClass("errorMsg");
    }

    // a POST request that sends the serialized data to the server as a query string if it passed validation
    $.ajax({
      method: "POST",
      url: "/tweets",
      data: $serializedData
    })
    .then(function (data) {
      $('#tweet-text').val("");
      $('.counter').val(140)
      // Refetching tweets on submission of new tweet
      loadTweets();
    });
  });

  loadTweets();

});

