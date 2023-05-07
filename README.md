# Tweeter Project

Tweeter is a simple, single-page Twitter clone.

This repository is the starter code for the project: Students will fork and clone this repository, then build upon it to practice their HTML, CSS, JS, jQuery and AJAX front-end skills, and their Node, Express back-end skills.

## Screenshots:
`Screenshot of tweet compose box and tweet box`: User can compose tweet in compose box. When user submit tweet, submitted tweet will appear right below the compose tweet.
In a tweet box you can see the recently posted tweet first, posted time, user name, img. You can see a shadow box effect when hover over tweet box and icons color changes when hover over icons.
!["Screenshot of tweet compose box and tweets"](https://github.com/mitalikawde11/tweeter/blob/master/docs/tweet_box.png?raw=true)


`Screenshot of compose tweet validation`:
There is a limit of 140 characters for composing tweet. Char counter shows the remaining characters as you type. If user exceeds limit then counter shows the negative red value. 
Error displays when user submits empty tweet or exceeds charcters limit.  
!["Screenshot of compose tweet validation"](https://github.com/mitalikawde11/tweeter/blob/master/docs/form_validation.png?raw=true)


`Screensshot of responsive design`:
Supports the responsive design. This screenshot is a Mobile style view. For tablet and desktop it changes view(above images are desktop styles).
!["Screenshot of responsive design (Mobile style)"](https://github.com/mitalikawde11/tweeter/blob/master/docs/mobile_style.png?raw=true)


## Getting Started

1. [Create](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template) a new repository using this repository as a template.
2. Clone your repository onto your local device.
3. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.

## Dependencies

- Express
- body-parser
- chance
- Node 5.10.x or above
