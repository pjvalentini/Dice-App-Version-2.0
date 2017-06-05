// *** DICE APP Version 2.0 - updated code to reflect aninations on the dice,

// Problem...my nieces are always loosing the dice to their board games.
// Solution...create a virtual roll of the dice using a computer.

// Original Author: PJ Valentini

// this function generates a random number
// between min and max
function getRandomNumber(min, max) {
		// Look up the Math object and all the available methods it has
		// https://www.w3schools.com/jsref/jsref_obj_math.asp
		// https://www.w3schools.com/jsref/jsref_random.asp
		return Math.floor(Math.random() * max) + min;
}

var img = document.querySelector(".dice");
var dice1 = document.querySelector(".dice1");
var dice2 = document.querySelector(".dice2");
var rollValue = document.querySelector(".rollValue");

function roll(num1, num2) {
		// what are we doing here?
		// we are setting the attribute "data-face" for the element
		// look in the html for these elements and observe
		// what happens in the inspector when the dice changes
		// <p data-face="1"  class="dice-face dice1"></p>
		// using "data attributes" is a common way for us
		// to use javascript to interact with html elements
		// we can also use these same attributes for css styling
		// in this instance its how we are changing the image for the dice
		// look in "styles.css for this!!!!"
		/*
		 * in styles.css search for this
		 *
		 * [data-face = "1"] {
		 *   background-position: -24px;
		 * }
		 *
		 * for more info on data attributes
		 * https://www.w3schools.com/tags/att_global_data.asp
		 *
		 */
		dice1.setAttribute('data-face', num1);
		dice2.setAttribute('data-face', num2);
}

/*
 * animate has 1 argument 'final'
 * it expects you to pass in a function as the argument when you call it
 * for instance using an anonymous function:
 *
 *      animate(function(){
 *          console.log("I'm done");
 *      })
 *
 * or using a named function:
 *
 *      function onFinish() {
 *          console.log("I'm done");
 *      }
 *      animate(onFinish);
 */
function animate(final) {

		// how many times do we want interval to execute
		// this means how many loops or frames in the animation
		var times = 10;

		// this is how fast the interval executes in milliseconds
		// 1000 is equal to 1 sec, this would be slower
		// 1000 says to execute the interval every second
		// 3000 says to execute the interval every 3 seconds
		// 10 says to execute the interval every .01 seconds - so very fast
		// you should play around with these numbers
		var speed = 100;

		// we set the var 'intv' to the return value of setInterval
		// so that we can stop the interval later on using clearInterval(intv)
		// without intv we couldn't tell the interval to stop
		// look up using setInterval and setTimeout
		// https://www.w3schools.com/jsref/met_win_setinterval.asp
		var intv = setInterval(function() {

				// we count down 'times' from its value defined above
				// var times = 10
				// so each interval we 'decrement' times which means to
				// subtract from its value
				// for instance times-- means times = times - 1
				// here we're saying when times is less than or equal to zero
				// to stop the interval and call the function "final"
				// and finally 'return' out of the function
			if (times <= 0) {
				clearInterval(intv);
				final();
				return;
			}

				// call roll function passing in 2 arguments
				// both are random numbers
				roll(getRandomNumber(1, 6), getRandomNumber(1, 6));

				// then "decrement" times - look up this word!
				// its the opposite of "increment"
				times--;

		}, speed);
}

// when the user clicks on "img" (onclick event), execute this anonymous function
// https://www.w3schools.com/jsref/event_onclick.asp
img.onclick = function() {

		// call animate, passing in a function that it executes
		// when its completed animating
		animate(function(){

				// what does the "parseInt" function do?
				// https://www.w3schools.com/jsref/jsref_parseint.asp
				var result = parseInt(dice1.getAttribute('data-face')) +
										 parseInt(dice2.getAttribute('data-face'));
				rollValue.innerText = result;
		});
};

// lets call the onclick function immediately
// so that it rolls the dice
// see how the user doesn't have to actually click
// onclick is just a function so we can call it
// directly as well.
img.onclick();
