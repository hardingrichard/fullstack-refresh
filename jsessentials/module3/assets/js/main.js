// Getting a Handle on the DOM
// Document = the entire HTML document
// Object = objects created based on the HTML structure
// Model = the data that the objects are based on

// The Document Object Model (DOM) is a programming interface for web documents. It represents the structure of a document as a tree of objects. The DOM is an object-oriented representation of the web page, which can be modified with a scripting language such as JavaScript.

// Document >> Root Element (<HTML>) >> Element (<head>) >> Element(<title>) >> Element (<body>) >> Element (<H1>) >> Element (<h1>) >> Text Node (Hello World)

let titleHeader = document.getElementById("titleHeader");
let introHeader = document.getElementById("introHeader");
let domHeader = document.getElementById("domHeader");
let changeHeader = document.getElementById("changeHeader");
let createHeader = document.getElementById("createHeader");
let eventHeaders = document.getElementsByClassName("eventHeader");
let headers = document.getElementsByTagName("h2");

console.log("titleHeader: ", titleHeader.nodeType);
console.log("Inner HTML: ", titleHeader.innerHTML);
console.log("Child Objects: ", titleHeader.childNodes);
console.log(headers.length);
