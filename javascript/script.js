// *** DICE APP Version 2.0 - updated code to reflect aninations on the dice,

// Problem...my nieces are always loosing the dice to their board games.
// Solution...create a virtual roll of the dice using a computer.

// This Function allow for a random number to be generated on the dice roll,
// When clicking the dice.jpg img.
function getRandomNumber(min, max) {
	return Math.floor(Math.random() * max) + min;
}

// These vars select the elements from the HTMl Page.
var img = document.querySelector(".dice");
var dice1 = document.querySelector(".dice1");
var dice2 = document.querySelector(".dice2");
var rollValue = document.querySelector(".rollValue");

function roll(num1, num2) {
	dice1.setAttribute('data-face', num1);
	dice2.setAttribute('data-face', num2);
}

// Anunimation function, creates dynamic dice rolling, setting the speed,
// and interval between dice rolls.
function animate(final) {
	var times = 20;
	var speed = 100;
	var intv = setInterval(function() {
		if (times <= 0) {
			clearInterval(intv);
			final();
			return;
		}
		roll(getRandomNumber(1, 6), getRandomNumber(1, 6));
		times--;
	}, speed);
}
// This onclick function makes it so now you can click on the dice img and get
// a response -- the dice roll with movement and now display the values of both
// dice.
img.onclick = function() {
	animate(function(){
		var result = parseInt(dice1.getAttribute('data-face')) +
								 parseInt(dice2.getAttribute('data-face'));
		rollValue.innerText = result;
	});
};

img.onclick();
