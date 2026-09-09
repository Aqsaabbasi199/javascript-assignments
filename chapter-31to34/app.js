// Question No 1

let dateTime = new Date();

document.write(dateTime);

// Question No 2

let date = new Date();

let month = date.getMonth();

let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

alert("Current month: " + months[month]);


// Question No 3

let date1 = new Date();

let day1 = date1.toString().slice(0, 3);

alert("Today is " + day);



// Question No 4

let day = prompt("Enter today's day:");

if (day == "Saturday" || day == "Sunday") {
    document.write("It's Fun day");
}


// Question No 5

let date2 = new Date().getDate();

if (date2 < 16) {
    document.write("First fifteen days of the month");
} else {
    document.write("Last days of the month");
}

// Question No 6

var rightNow = new Date();

var minutes = rightNow.getTime() / (1000 * 60);

document.write("Elapsed minutes since January 1, 1970: " + minutes);


// Question No 7


var rightNow = new Date();
var hour = rightNow.getHours();

if (hour < 12) {
    alert("Its AM");
} else {
    alert("Its PM");
}



// Question No 8

var laterDate = new Date(2020, 11, 31);

document.write(laterDate);

// Question No 9

var ramadan = new Date("June 18, 2015");

var today = new Date();

var daysPast = (today - ramadan) / (1000 * 60 * 60 * 24);

alert(Math.floor(daysPast) + " days have passed since 1st Ramadan");

// Question No 10

var referenceDate = new Date();

var beginning2015 = new Date("January 1, 2015");

var seconds = (referenceDate - beginning2015) / 1000;

document.write("Seconds elapsed between reference date and beginning of 2015: " + seconds);

// Question No 11

var today = new Date();

var hours = today.getHours();

today.setHours(hours + 1);

document.write(today);




// Question No 12


var today = new Date();

today.setFullYear(today.getFullYear() - 100);

alert(today);


// Question No 13

var age = prompt("Enter your age:");

var currentYear = new Date().getFullYear();

var birthYear = currentYear - age;

document.write("Your birth year is: " + birthYear);





// Question No 13



var customerName = "Ali";
var currentMonth = "September";
var numberOfUnits = 350;
var chargesPerUnit = 16.00;
var latePaymentSurcharge = 150.00;

var netAmount = numberOfUnits * chargesPerUnit;
var grossAmount = netAmount + latePaymentSurcharge;

document.write("<h2>K-Electric Bill</h2>");
document.write("Customer Name: " + customerName + "<br>");
document.write("Current Month: " + currentMonth + "<br>");
document.write("Number of Units: " + numberOfUnits + "<br>");
document.write("Charges per Unit: " + chargesPerUnit.toFixed(2) + "<br>");
document.write("Net Amount Payable (within Due Date): " + netAmount.toFixed(2) + "<br>");
document.write("Late Payment Surcharge: " + latePaymentSurcharge.toFixed(2) + "<br>");
document.write("Gross Amount Payable (after Due Date): " + grossAmount.toFixed(2));