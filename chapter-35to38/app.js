// Question No 1

function showDateTime() {
    let currentDate = new Date();
    document.write(currentDate);
}

showDateTime();


// Question No 2

function greetUser() {
    let firstName = prompt("Enter your first name:");
    let lastName = prompt("Enter your last name:");

    let fullName = firstName + " " + lastName;

    alert("Hello " + fullName);
}

greetUser();

// Question No 4

function addNumbers() {
    let num1 = Number(prompt("Enter first number:"));
    let num2 = Number(prompt("Enter second number:"));

    let sum = num1 + num2;

    return sum;
}

let result = addNumbers();

document.write("Sum = " + result);




function calculator(num1, num2, operator) {
    let result;

    if (operator == "+") {
        result = num1 + num2;
    } 
    else if (operator == "-") {
        result = num1 - num2;
    } 
    else if (operator == "*") {
        result = num1 * num2;
    } 
    else if (operator == "/") {
        result = num1 / num2;
    } 
    else {
        result = "Invalid Operator";
    }

    return result;
}

let num1 = Number(prompt("Enter first number"));
let num2 = Number(prompt("Enter second number"));
let operator = prompt("Enter operator (+, -, *, /)");

let answer = calculator(num1, num2, operator);

document.write("Result = " + answer);





// Question No 5


function square(num) {
    let result = num * num;
    return result;
}

let number = Number(prompt("Enter a number"));

let answer2 = square(number);

document.write("Square = " + answer);



// Question No 7

function counting(start, end) {
    let result = "";

    for (let i = start; i <= end; i++) {
        result = result + i + "<br>";
    }

    return result;
}

let start = Number(prompt("Enter start number"));
let end = Number(prompt("Enter end number"));

let answer3 = counting(start, end);

document.write(answer);



// Question No 10



function checkPalindrome(str) {
    let reverse = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reverse = reverse + str[i];
    }

    if (str === reverse) {
        return "Palindrome";
    } else {
        return "Not Palindrome";
    }
}

let word = prompt("Enter a word");

let result10 = checkPalindrome(word);

document.write(result10);





// Question No 11

function capitalizeWords(str) {
    let words = str.split(" ");
    let result = "";

    for (let i = 0; i < words.length; i++) {
        let word = words[i];

        result = result + word[0].toUpperCase() + word.slice(1) + " ";
    }

    return result.trim();
}

let string = prompt("Enter a string");

let result11 = capitalizeWords(string);

document.write(result11);




// Question No 12


function findLongestWord(str) {
    let words = str.split(" ");
    let longestWord = "";

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }

    return longestWord;
}

let string12 = prompt("Enter a string");

let result12 = findLongestWord(string12);

document.write("Longest Word = " + result12);




// Question No 13



function countLetter(str, letter) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            count++;
        }
    }

    return count;
}

let string13 = prompt("Enter a string:");
let letter = prompt("Enter a letter:");

let result13 = countLetter(string13, letter);

document.write("Occurrences = " + result13);


// Question No 14

function calcCircumference(radius) {
    let circumference = 2 * Math.PI * radius;

    document.write("The circumference is " + circumference + "<br>");
}

function calcArea(radius) {
    let area = Math.PI * radius * radius;

    document.write("The area is " + area);
}

let radius = Number(prompt("Enter radius:"));

calcCircumference(radius);
calcArea(radius);