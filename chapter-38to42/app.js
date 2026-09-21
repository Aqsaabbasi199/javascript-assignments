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