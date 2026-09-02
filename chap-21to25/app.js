
// Question No 1

var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");

var fullName = firstName + " " + lastName;

alert("Hello " + fullName);

// Question No 2

var phone = prompt("Enter your favorite mobile phone model:");

document.write("My favorite phone is: " + phone);
document.write("<br>Length of string: " + phone.length);

// Question No 3

var word = "Pakistani";
var index = word.indexOf("n");

document.write("String: " + word + "<br>");
document.write("Index of 'n': " + index);

// Question No 4

var word = "Hello World";
var index = word.lastIndexOf("l");

document.write("String: " + word + "<br>");
document.write("Last Index of 'l': " + index);


// Question No 5

var str = "Pakistani";

document.write("String: " + str + "<br>");
document.write("Character at index 3: " + str.charAt(3));

// Question No 6

var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");

document.write("Hello " + fullName);


// Question No 7

var city = "Hyderabad";

var result = city.replace("Hyder", "Islam");

document.write("City: " + city + "<br>");
document.write("After replacement: " + result);


// Question No 8

var message = "Ali and Sami are best friends. They play cricket and football together.";

var result = message.replace(/and/g, "&");

document.write("Original message: " + message + "<br>");
document.write("After replacement: " + result);

// Question No 9

var value = "472";

document.write("Value: " + value + "<br>");
document.write("Type: " + typeof value + "<br>");

var number = Number(value);

document.write("Value: " + number + "<br>");
document.write("Type: " + typeof number);


// Question No 10

var userInput = prompt("Enter a word:");

var upperCase = userInput.toUpperCase();

document.write("User input: " + userInput + "<br>");
document.write("Upper case: " + upperCase);



// Question No 11

var userInput = prompt("Enter a word:");

var titleCase = userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();

document.write("User input: " + userInput + "<br>");
document.write("Title case: " + titleCase);


// Question No 12

var num = 35.36;

var result = num.toString().replace(".", "");

document.write("Number: " + num + "<br>");
document.write("Result: " + result);





// Question No 13

var username = prompt("Enter your username:");

for (var i = 0; i < username.length; i++)
{
    var code = username.charCodeAt(i);

    if (code == 33 || code == 44 || code == 46 || code == 64)
    {
        username = prompt("Enter a valid username:");
        break;
    }
}

document.write("Username: " + username);




// Question No 14

var A = ["cake", "apple pie", "cookie", "chips", "patties"];

var item = prompt("Enter an item to search:");

item = item.toLowerCase();

if (A.indexOf(item) != -1)
{
    alert("Yes, " + item + " is available in the list.");
}
else
{
    alert("No, " + item + " is not available in the list.");
}

// Question No 15

var password = prompt("Enter your password:");

var alphabet = false;
var number = false;

for (var i = 0; i < password.length; i++)
{
    var code = password.charCodeAt(i);

    if ((code >= 65 && code <= 90) ||
        (code >= 97 && code <= 122))
    {
        alphabet = true;
    }

    if (code >= 48 && code <= 57)
    {
        number = true;
    }
}

if (password.length >= 6 &&
    alphabet == true &&
    number == true &&
    !(password.charCodeAt(0) >= 48 &&
      password.charCodeAt(0) <= 57))
{
    document.write("Valid Password");
}
else
{
    document.write("Invalid Password");
}

// Question No 16

var university = "University of Karachi";

for (var i = 0; i < university.length; i++) {
    document.write(university[i] + "<br>");
}





// Question No 17

var name = prompt("Enter your name:");

var last;

for (var i = 0; i < name.length; i++) {
    last = name[i];
}

document.write(last);



// Question No 18

var str = "The quick brown fox jumps over the lazy dog";
var count = 0;

for (var i = 0; i < str.length; i++) {
    if (str[i] == "the" || str[i] == "The") {
        count++;
    }
}

document.write("The word 'the' occurs: " + count + " times");









