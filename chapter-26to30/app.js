// Question No 1

var  num = prompt("Enter a positive number");

document.write("Number: " + num + "<br>");
document.write("Round off value: " + Math.round(num) + "<br>");
document.write("Floor value: " + Math.floor(num) + "<br>");
document.write("Ceil value: " + Math.ceil(num));

// Question No 2
var num = prompt("Enter a negative floating point number");

document.write("Number: " + num + "<br>");
document.write("Round off value: " + Math.round(num) + "<br>");
document.write("Floor value: " + Math.floor(num) + "<br>");
document.write("Ceil value: " + Math.ceil(num));

// Question No 3

var num = prompt("Enter a number");

document.write("The absolute value of " + num + " is " + Math.abs(num));


// Question No 4

var dice = Math.floor(Math.random() * 6) + 1;

document.write("The value of dice is " + dice);

// Question No 5

 var coin = Math.floor(Math.random() * 2) + 1;

if (coin == 1) {
    document.write("The value of coin is Heads");
}
else {
    document.write("The value of coin is Tails");
}


// Question No 6


var num = Math.floor(Math.random() * 100) + 1;

document.write("Random number is: " + num);


// Question No 7

var weight = prompt("Enter your weight");

weight = parseFloat(weight);

document.write(weight);


// Question No 8

secret = Math.floor(Math.random() * 10) + 1;

user = prompt("Enter a number between 1 and 10");

if (user == secret) {
    document.write("Congratulations! You guessed the secret number.");
}