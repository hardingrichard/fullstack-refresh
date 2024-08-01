// Using jQuery
// $(selector).action() is the basic syntax of jQuery
// $(document).ready(function(){}); is used to prevent any jQuery code from running before the document is finished loading (is ready).
// jQuery can be used to select elements by id, class, type, attribute, etc.
// jQuery can be used to perform actions on elements like hiding, showing, adding classes, etc.

// $(this).hide(); - hides the current element
// $("p").hide(); - hides all <p> elements
// $(".test").hide(); - hides all elements with class="test"
// $("#test").hide(); - hides the element with id="test"


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

function myTitle() {
    $("#title").html("jQuery test"); // changes the text of the h1 element
}

$(document).ready(myTitle); // calls the function when the document is ready

function installSection() {
    $("h2").attr("style", "color:darkblue").html("Another jQuery test"); // changes the text and color of the h2 element
}

$(document).ready(installSection);

$(document).ready(function () {
    $("button").click(function() {
        $("p").hide();
    })
})

$(document).ready(function () {
    $("button").eq(1).click(function() { 
        $("p").show();
        // eq() method selects the element at the specified index, this case 1 would select the second button.
    })
})

