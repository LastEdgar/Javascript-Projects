x = 10;

function localVar() { //Assignment #39, global var ,local var, error to console
    let y = 5,
        z = x + y;
    document.getElementById("local").innerHTML = z;
    console.log(i);
}

function timeGreeting() {   //Assignment #40, first draft time function;
    if (new Date().getHours() <= 12) {
        document.getElementById("greeting").innerHTML = "It is before noon!";
    }
    else {
        document.getElementById("greeting").innerHTML = "It is after noon!";
    }
}

function myFunc() { //Assignment #41
    if (x > 5) {
        console.log("Test Run Complete");
    }
}

function senior_discount() { //Assignment #42, copy but modify if/else code
    age = document.getElementById("Age").value;
    if (age >= 55) {
        Discount = "You are eligible for the discount!";
    }
    else {
        Discount = "You're too young still- enjoy your youth!";
    }
    document.getElementById("oldEnough").innerHTML = Discount;
}

function Time_function() { //Assignment #43, write out time function exactly
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is the afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}