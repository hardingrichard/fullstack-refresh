function changeImage() {
    let image = document.getElementById('myImage');

    if (image.src.match('dog')) {
        image.src = '../assets/media/images/dog.png';
    }   else {
            image.src = '../assets/media/images/bones.png';
    }
}