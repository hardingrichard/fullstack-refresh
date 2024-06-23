function input(x) {

    if (document.getElementById('result').value == 0) {
        document.getElementById('result').value = x;
    }
    else {
        document.getElementById('result').value += x;
    }
}

function operators(x) {
    switch (x) {
        case 1:
            document.getElementById('result').value += '+';
            break;
        case 2:
            document.getElementById('result').value += '-';
            break;
        case 3:
            document.getElementById('result').value += '*';
            break;
        case 4:
            document.getElementById('result').value += '/';
            break;
    }
}

function clearInput() {
    document.getElementById('result').value = 0;
}

function plusMinus() {
    document.getElementById('result').value = document.getElementById('result').value * -1;
}

function percentage() {
    document.getElementById('result').value = document.getElementById('result').value / 100;
}

function square() {
    document.getElementById('result').value = Math.pow(document.getElementById('result').value, 2);
}