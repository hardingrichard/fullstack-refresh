function changeImage() {
    let image = document.getElementById('myImage');

    if (image.src.match('bones')) {
        image.src = '../module1/assets/media/images/dog.png';
    }   else {
            image.src = '../module1/assets/media/images/bones.png';
    }
}

function styleChange() {
    let text = document.getElementById("demo2")
    text.style.fontSize = "25px";
    text.style.color = "red";
}

function numberValidate() {
    let x, text;

    // Get input field value from id="numb"
    x = document.getElementById("numb").value;

    // If x is Not a Number or less than one or greater than 10
    if (isNaN(x) || x < 1 || x > 10) {
        text = "Input not valid";
    } else {
        text = "Input OK";
    }

    // Display result
    document.getElementById("demo3").innerHTML = text;
}