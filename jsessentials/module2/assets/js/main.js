let car = "Mercedes",
    van = "Ford",
    myNumber = 55,
    myString = "55"

let firstName = "Rich", lastName = "Harding", age = 35;

let myMessage = firstName + " " + lastName + " is " + age + " years old.";

console.log(car);
console.log(van);
console.log(myNumber);
console.log(myString);
console.log(myNumber + myString);
console.log(myMessage);

console.log(car, van, myNumber, myString, myNumber + myString, myMessage);

let multiValues = [car, van, myNumber, myString, myNumber + myString, myMessage];

console.log(multiValues);

let carExamples = [
    "Mercedes", 
    "Ford", 
    "Mazda", 
    "Porsche", 
    "BMW"
];

console.log(carExamples);
console.log(carExamples[3]);

carExamples[1] = "Audi";
console.log(carExamples);

console.log(carExamples.sort());
console.log(carExamples.join());
console.log(carExamples.reverse());

// let htmlTags = document.getElementsByTagName("p");
// console.log(htmlTags);

// htmlTags[0];
// htmlTags.length;

let x = 5;
let y = 10;

let z = x * y;
console.log(z);

z--;
console.log(z);

z++;
console.log(z);

z += 5;
console.log(z);

z += x;
console.log(z);

let playerName = "Rich",
    playerScore = 1500,
    playerRank = 1;
let message = "Great work " + playerName + ", you are currently ranked " + playerRank + " with a score of " + playerScore;

console.log(message);

let a = 5, 
    b = 10;

if (a == b) {
    console.log("a is equal to b")
} else {
    console.log("a is not equal to b")
}

console.log("Values are " + a + " and " + b);

a = 65;
b = "65";

if (a == b) {
    console.log("a is equal to b")
} else {
    console.log("a is not equal to b")
}

if (a === b) {
    console.log("a is equal to b")
} else {
    console.log("a is not equal to b")
}

a = 72;
b = 68;

if (a > b) {
    console.log("a is greater than b")
}   else if (a < b) {
    console.log("a is less than b")
}   else {
    console.log("a is equal to b")
}

switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
}
console.log("Today is " + day);

// condition ? expressionIfTrue : expressionIfFalse

let playerOne = 100,
    playerTwo = 150;

let highScore = (playerOne > playerTwo) ? playerOne : playerTwo;
console.log(highScore);

let voterAge = 16;
let votingAge = (voterAge < 18) ? "Too young" : "Old enough";
console.log(votingAge);

let loopOne = 1;

if (loopOne < 10) {
    console.log(loopOne);
}

while (loopOne < 10) {
    console.log(loopOne);
    loopOne++;
}

let carLoop = ["BMW", "Audi", "Mercedes", "Porsche", "Ford"];
carLoop[1];

let i = 0
let text = "";

while (carLoop[i]) {
    text += carLoop[i] + " ";
    i++;
    console.log(text);
}

i = 0;
text = "";

do {
    text += "Number is: " + i + " ";
    i++;
} while (i < 10);
console.log(text);

// Common Loop components: Set up the index, Check the condition, Increment the index

for (i = 0; i < 5; i++) {
    text += "Number is: " + i + " ";
}
console.log(text);

for (i = 0; i < carLoop.length; i++) {
    text += carLoop[i] + " ";
}
console.log(text);

for (i = 0; i < 10; i++) {
    if (i === 3) {
        continue;
    }
    if (i === 7) {
        break;
    }
    text += "Number is: " + i + " ";
}
console.log(text);


function functionExample (a, b) {
    return a * b;
}

console.log(functionExample(5, 10));

let fx = function (a, b) {return a * b};
console.log(x);

let fx2 = fx(2, 10);
console.log(fx2);

let fx3 = fx(2, 10) * 2;
console.log(fx3);

function functionExample2 (a, b) {
    return arguments.length;
}

console.log(functionExample2(2, 5));

function valueCheck (x, y) {
    if (y === undefined) {
        y = 0;
    }
    return x * y;
}

console.log(valueCheck(5, 5));

// Run through the arguments and return the highest value
function findMax() {
    let i;
    max = -Infinity;

    for (i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}

maxFinder = findMax(5, 10, 15, 20, 25, 30);
console.log(maxFinder);

// Function to return the sum of all arguments
let myObject = {
    firstName: "Rich",
    lastName: "Harding",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}
console.log(myObject, myObject.fullName());

let numX = 34.00;
let numY = 34;

console.log(numX);
console.log(numY);

numX = (0.2 * 10 + 0.1 * 10) / 10;
console.log(numX);

numX = "fifty five";
if (isNaN(numX)) {
    console.log("Not a number");
}

console.log(Math.random()); // Random number between 0 and 1
console.log(Math.random() * 100); // Random number between 0 and 100

console.log(Math.max(0, 150, 30, 20, 38, 45, 100)); // Returns the highest value
console.log(Math.min(0, 150, 30, 20, 38, 45, 100)); // Returns the lowest value

console.log(Math.round(4.7)); // Rounds to nearest integer
console.log(Math.round(4.4)); // Rounds to nearest integer
console.log(Math.ceil(4.4)); // Always rounds up
console.log(Math.floor(4.7)); // Always rounds down

console.log(Math.PI); // Value of PI
console.log(Math.sqrt(64)); // Square root of 64
console.log(Math.SQRT2); // Square root of 2