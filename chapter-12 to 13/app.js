
// Question No 1

var ch = prompt("Enter one character:");

var ascii = ch.charCodeAt(0);

if (ascii >= 48 && ascii <= 57) {
     alert("It is a Number");
}
else if (ascii >= 65 && ascii <= 90) {
     alert("It is an Uppercase Letter");
}
else if (ascii >= 97 && ascii <= 122) {
     alert("It is a Lowercase Letter");
}
else {
    alert("Invalid");
}

// Question No 2

var num1 = +prompt("Enter first number:");
var num2 = +prompt("Enter second number:");

if (num1 > num2) {
    alert("Larger Number is: " + num1);
}
else if (num2 > num1) {
    alert("Larger Number is: " + num2);
}
else {
    alert("Both numbers are equal.");
}


// Question No 3

var num = +prompt("Enter a number:");

if (num > 0) {
     alert("Positive Number");
}
else if (num < 0) {
     alert("Negative Number");
}
else {
     alert("Zero");
}


// Question No 4

var ch = prompt("Enter a character:");

if (ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u" ||
    ch == "A" || ch == "E" || ch == "I" || ch == "O" || ch == "U") {

    alert("true");
}
else {
    alert("false");
}



// Question No 5

var correctPassword = "aqsaabbasi123";

var userPassword = prompt("Enter your password:");

if (userPassword == "") {
    alert("Please enter your password");
}
else if (userPassword == correctPassword) {
    alert("Correct! The password you entered matches the original password.");
}
else {
    alert("Incorrect password");
}



// Question No 6


var greeting;
var hour = 13;

if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

alert("greeting");





// Question No 7


var time = +prompt("Enter time in 24-hour format:");

if (time >= 0 && time < 1200) {
    alert("Good Morning");
}
else if (time >= 1200 && time < 1700) {
    alert("Good Afternoon");
}
else if (time >= 1700 && time < 2100) {
    alert("Good Evening");
}
else if (time >= 2100 && time <= 2359) {
    alert("Good Night");
}
else {
    alert("Invalid Time");
}