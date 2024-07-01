function equivalentCheck() {
    
    if (parseInt(document.getElementById('equivalent').value)) {

        document.getElementById('equivalent').value = 0;
        document.getElementById('result').value = 0;
    }
}

function input(x) {

    equivalentCheck();

    if (document.getElementById('result').value == 0) {
        document.getElementById('result').value = x;
    }
    else {
        document.getElementById('result').value += x;
    }
}

function operandCheck() {

    if (document.getElementById('operand').value == '') {

        document.getElementById('operand').value = document.getElementById('result').value;
        document.getElementById('equivalent').value = 1;
    }

    else {
        operatorCheck();
    }
}

function operatorCheck() {

    let a = parseFloat(document.getElementById('operand').value);
    let b = parseFloat(document.getElementById('result').value);

    switch (parseInt(document.getElementById('operation').value)) {
        case 1:
            a += b;
            break;
        case 2:
            a -= b;
            break;
        case 3:
            a *= b;
            break;
        case 4:
            a /= b;
            break;
    }

    document.getElementById('operand').value = a;
    document.getElementById('result').value = a;
    document.getElementById('equivalent').value = 1;
}

function operators(x) {

    switch (x) {
        case 1:
            document.getElementById('operation').value = 1;
            break;
        case 2:
            document.getElementById('operation').value = 2;
            break;
        case 3:
            document.getElementById('operation').value = 3;
            break;
        case 4:
            document.getElementById('operation').value = 4;
            break;
        default:
    }

    operandCheck();
}

function decimalPoint() {

    document.getElementById('result').value += '.';
}

function clearInput() {

    document.getElementById('result').value = 0;
    document.getElementById('operand').value = '';
    document.getElementById('operation').value = 0;
    document.getElementById('equivalent').value = 0;
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

function equals() {

    operators(parseInt(document.getElementById('operation').value));
    document.getElementById('result').value = document.getElementById('operand').value;
    document.getElementById('operand').value = '';
    document.getElementById('equivalent').value = 1;
}