function getRandomNumber(min, max) {
    return Math.floor(Math.random() * max) + min;
}

var img = document.querySelector(".dice");
var dice1 = document.querySelector(".dice1");
var dice2 = document.querySelector(".dice2");
var rollValue = document.querySelector(".rollValue");

function roll(num1, num2) {
    dice1.setAttribute('data-face', num1);
    dice2.setAttribute('data-face', num2);
}

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

img.onclick = function() {
    animate(function(){
        var result = parseInt(dice1.getAttribute('data-face')) + 
                     parseInt(dice2.getAttribute('data-face'));
        rollValue.innerText = result;                   
    });
};

img.onclick();