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