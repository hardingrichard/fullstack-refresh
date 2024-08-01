// Using jQuery
// $(selector).action() is the basic syntax of jQuery
// $(document).ready(function(){}); is used to prevent any jQuery code from running before the document is finished loading (is ready).
// jQuery can be used to select elements by id, class, type, attribute, etc.
// jQuery can be used to perform actions on elements like hiding, showing, adding classes, etc.

$(this).hide(); // hides the current element
$("p").hide(); // hides all <p> elements
$(".test").hide(); // hides all elements with class="test"
$("#test").hide(); // hides the element with id="test"


// Comparison javaScript vs jQuery
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// javascript
function myFunction () {
    let obj = document.getElementById("test");
    obj.innerHTML = "javaScript example";
}

//jQuery
function myFunction () {
    $("#test").html("jQuery example");
}

$(document).ready(myFunction);
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

