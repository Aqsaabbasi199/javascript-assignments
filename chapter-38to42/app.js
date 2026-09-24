// Question No 1

function power(a, b) {
    let result = 1;

    for (let i = 1; i <= b; i++) {
        result = result * a;
    }

    return result;
}

let a = 2;
let b = 3;

console.log(power(a, b));


// Question No 2

function leapYear(year) {

    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
        return "Leap Year";
    }
    else {
        return "Not a Leap Year";
    }
}

let year = Number(prompt("Enter year:"));

console.log(leapYear(year));



// Question No 3


function semiPerimeter(d, e, f) {
    let S = (d + e+ f) / 2;
    return S;
}

function triangleArea(d, e, f){
    let S = semiPerimeter(d, e, f);

    let area = Math.sqrt(
        S * (S - d) * (S - e) * (S - f)
    );

    return area;
}

let d = 3;
let e = 4;
let f = 5;

console.log("Area =", triangleArea(d, e, f));



// Question No 4


function average(marks1, marks2, marks3) {
    let avg = (marks1 + marks2 + marks3) / 3;
    return avg;
}

function percentage(marks1, marks2, marks3) {
    let total = marks1 + marks2 + marks3;
    let percent = (total / 300) * 100;
    return percent;
}

function mainFunction() {
    let marks1 = 80;
    let marks2 = 70;
    let marks3 = 90;

    let avg = average(marks1, marks2, marks3);
    let percent = percentage(marks1, marks2, marks3);

    document.write("Average: " + avg + "<br>");
    document.write("Percentage: " + percent + "%");
}

mainFunction();

// Question No 5

function myIndexOf(text, character) {

    for (let i = 0; i < text.length; i++) {

        if (text.charAt(i) === character) {
            return i;
        }
    }

    return -1;
}

let result = myIndexOf("Hello", "l");

document.write(result);

// Question No 6

function deleteVowels(sentence) {

    let result = "";

    for (let i = 0; i < sentence.length; i++) {

        let character = sentence.charAt(i);

        if (
            character !== "a" &&
            character !== "e" &&
            character !== "i" &&
            character !== "o" &&
            character !== "u"
        ) {
            result = result + character;
        }
    }

    return result;
}

let answer = deleteVowels("Hello World");

document.write(answer);

// Question No 7

function countVowels(text) {

    let count = 0;

    for (let i = 0; i < text.length - 1; i++) {

        let twoCharacters = text.charAt(i) + text.charAt(i + 1);

        switch (twoCharacters) {

            case "aa":
            case "ae":
            case "ai":
            case "ao":
            case "au":

            case "ea":
            case "ee":
            case "ei":
            case "eo":
            case "eu":

            case "ia":
            case "ie":
            case "ii":
            case "io":
            case "iu":

            case "oa":
            case "oe":
            case "oi":
            case "oo":
            case "ou":

            case "ua":
            case "ue":
            case "ui":
            case "uo":
            case "uu":

                count++;
                break;
        }
    }

    return count;
}

let result2 = countVowels("Please read");

document.write("Vowel pairs: " + result2);




// Question No 8

let km = prompt("Enter distance in kilometers:");

function meters(km) {
    document.write("Meters = " + (km * 1000) + "<br>");
}

function feet(km) {
    document.write("Feet = " + (km * 3280.84) + "<br>");
}

function inches(km) {
    document.write("Inches = " + (km * 39370.08) + "<br>");
}

function centimeters(km) {
    document.write("Centimeters = " + (km * 100000));
}

meters(km);
feet(km);
inches(km);
centimeters(km);



// Question No 9




let hours = prompt("Enter hours worked:");

function overtimePay(hours) {
    if (hours > 40) {
        let overtimeHours = hours - 40;
        let pay = overtimeHours * 12;

        document.write("Overtime pay = Rs. " + pay);
    }
    else {
        document.write("No overtime pay");
    }
}

overtimePay(hours);



// Question No 10


let amount = prompt("Enter amount to withdraw:");

let hundredNotes = Math.floor(amount / 100);
let remaining = amount % 100;

let fiftyNotes = Math.floor(remaining / 50);
remaining = remaining % 50;

let tenNotes = Math.floor(remaining / 10);

document.write("100 notes = " + hundredNotes + "<br>");
document.write("50 notes = " + fiftyNotes + "<br>");
document.write("10 notes = " + tenNotes);