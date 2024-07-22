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