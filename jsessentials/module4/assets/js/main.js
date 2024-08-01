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
};

//jQuery
function myFunction () {
    $("#test").html("jQuery example");
};

$(document).ready(myFunction);
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function myTitle() {
    $("#title").html("jQuery test"); // changes the text of the h1 element
};

$(document).ready(myTitle); // calls the function when the document is ready

function installSection() {
    $("h2").attr("style", "color:darkblue").html("Another jQuery test"); // changes the text and color of the h2 element
};

$(document).ready(installSection);

$(document).ready(function () {
    // Hide all paragraphs when the first button is clicked
    $("button").eq(0).click(function() {
        $("p").hide();
    });

    // Show all paragraphs when the second button is clicked
    $("button").eq(1).click(function() {
        $("p").show();
    });

    // Reset button to revert page back to original HTML content
    $("button").eq(2).click(function() {
        $("h2").eq(0).attr("style", "color:#333").html("Installing And Using jQuery");
        $("h2").eq(1).attr("style", "color:#333").html("Modifying Web Pages Using jQuery");
        $("p").show();
        $("#title").html("<h1>Working With Libraries: jQuery<h1/>");
    });

    // Show text in alert for #show1 button
    $("#show1").click(function() {
        alert("Text: " + $("#paraTest").text());
    });

    // Show HTML in alert for #show2 button
    $("#show2").click(function() {
        alert("HTML: " + $("#paraTest").html());
    });

    // Show href Value in alert for #show3 button
    $("#show3").click(function() {
        alert($("#w3s").attr("href"));
    });

    // Set text for #set1 button
    $("#set1").click(function() {
        $("#test1").text("Test text set from clicking 'Set Text' button");
    });

    // Set HTML for #set2 button
    $("#set2").click(function() {
        $("#test2").html("<b>Test text set from clicking 'Set HTML' button</b>");
    });

    // Set Value for #set3 button
    $("#set3").click(function() {
        $("#test3").val("Text input text set from clicking 'Set Value' button");
    });

    // Click event for appending to #appendBtn button
    $("#appendBtn").click(function() {
        appendText();
    });
});

function appendText() {
    let txt1 = "<p> Example text with html markup </p>"; // Create text with HTML
    let txt2 = $("<p></p>").text("This is example text."); // Create text with jQuery
    let txt3 = document.createElement("p");

    txt3.innerHTML = "Example text created using the DOM"; // Create text with the DOM

    $("#test4").append(txt1, txt2, txt3); // Append the new elements
}

