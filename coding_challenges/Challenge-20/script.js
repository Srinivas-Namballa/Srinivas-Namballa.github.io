'use strict';

var currentColor = "green";
var timer;
var duration = 5000;

var changeColor = function() {
    var body = document.getElementById("body");
    body.style.backgroundColor = currentColor;

    if(currentColor == "green") {
        currentColor = "red";
    } else {
        currentColor = "green";
    }
}

timer = setInterval(changeColor, duration);

var slow = document.getElementById("slow");
slow.addEventListener("click", function() {
    clearInterval(timer);
    duration = duration * 2;
    timer = setInterval(changeColor, duration)
});

var fast = document.getElementById("fast");
fast.addEventListener("click", function() {
    clearInterval(timer);
    duration = duration / 2;
    timer = setInterval(changeColor, duration)
});