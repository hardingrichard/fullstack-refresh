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