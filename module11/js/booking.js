function calculate() {
    let course = 0;
    let total = 0;

    if(document.getElementById("puppy").checked == true) {
        course = 100;
    }
    else if(document.getElementById("obedience").checked == true) {
        course = 150;
    }
    else if(document.getElementById("agility").checked == true) {
        course = 200;
    }
    else if(document.getElementById("protection").checked == true) {
        course = 250;
    }
    else if(document.getElementById("therapy").checked == true) {
        course = 300;
    }
    else if(document.getElementById("service").checked == true) {
        course = 350;
    }
    else if(document.getElementById("rescue").checked == true) {
        course = 400;
    }
    
    total = course + (course * 0.13);

    alert("The total cost including tax is: $" + total);
}
