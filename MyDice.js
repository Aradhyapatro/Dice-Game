// For Dice 1

var d1 = Math.floor(Math.random() * 6) + 1;
var dice1 = "dice" + d1 + ".png";
var ds1 = "images/" + dice1;
var image1 = document.querySelector("img");
image1.setAttribute("src", ds1);

// For Dice 2

var d2 = Math.floor(Math.random() * 6) + 1;
var dice2 = "dice" + d2 + ".png";
var ds2 = "images/" + dice2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", ds2);

// Statement

if (d1 > d2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Won";
} else if (d2 > d1) {
    document.querySelector("h1").innerHTML = "🚩 Player 2 Won";
} else {
    document.querySelector("h1").innerHTML = "It is a draw";
}