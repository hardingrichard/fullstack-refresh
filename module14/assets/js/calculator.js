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

function plusMinus() {
    document.getElementById('result').value = document.getElementById('result').value * -1;
}