function input(x) {

    if (document.getElementById('result').value == 0) {
        document.getElementById('result').value = x;
    }
    else {
        document.getElementById('result').value += x;
    }
}

function clearInput() {
    document.getElementById('result').value = 0;
}