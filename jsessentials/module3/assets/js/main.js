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
console.log(headers[1].innerHTML);

let headLink = document.getElementsByTagName("a");
let firstLink = headLink[0].getAttribute("href");
console.log(firstLink.length);
console.log("First Link: ", firstLink);

// Changing the DOM
titleHeader.setAttribute("align", "center");
titleHeader.style.color = "darkblue";
document.getElementById("domImg").setAttribute("src", "assets/img/dom.png");
document.getElementById("domImg").setAttribute("alt", "Image of the DOM tree");

document.getElementById("domImg").addEventListener("mouseover", function () {
    document.getElementById("domImg").setAttribute("src", "");
    document.getElementById("domImg").setAttribute("alt", "");
});

changeHeader.addEventListener("mouseover", function() {
    changeHeader.setAttribute("Style", "color: darkred", "font-size: 24px");
});

// Creating DOM Elements
let listItems = document.createElement("li"); // Create a list item
let textNode = document.createTextNode("Testing 123"); // Create a text node
listItems.appendChild(textNode); // Append the text node to the list item

createHeader.appendChild(listItems); // Append the list item to the introHeader
listItems.setAttribute("style", "font-size: 16px");

let pElement = document.createElement("p");
let pNode = document.createTextNode("This is a new paragraph test");

pElement.appendChild(pNode); // Append the text node to the paragraph element
listItems.appendChild(pElement); // Append the paragraph element to the list item

let newParaElement = document.getElementById("changeHeader");
newParaElement.appendChild(pElement); // Append the paragraph element to the changeHeader
pElement.setAttribute("style", "font-size: 18px");

let headerAdd = document.getElementById("headerSection");
let newHeader = document.createElement("h2");
let newHeaderNode = document.createTextNode("Test: This is a new header");

headerAdd.appendChild(newHeader); // Append the new header element to the headerSection
newHeader.appendChild(newHeaderNode); // Append the text node to the new header element

// Responding to Events

document.getElementsByClassName("eventHeader")[0].onclick = function() {
    alert("Hey! You clicked on me!")
}

document.getElementsByClassName("eventHeader")[1].onclick = function() {
    alert("Hey! You clicked on me too!")
}
