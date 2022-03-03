function addition() {       //Addition
    var adder = 10 + 5;
    document.getElementById("Math").innerHTML = "Ten plus five is... " + adder+".";
}

function subtract() {       //Subtraction
    var minus = 10 - 5;
    document.getElementById("Math2").innerHTML = "but ten minus five is... " + minus+".";
}

function multiply() {       //Multiplication
    var multi = 10 * 5;
    document.getElementById("Math3").innerHTML = "Ten times five is... " + multi+".";
}

function divide() {         //Division
    var divi = 10 / 5;
    document.getElementById("Math4").innerHTML = "Ten divided by five is... " + divi+".";
}

function multiMath() {      //Multiple operations in one variable
    var multi = 10 / 5 * 2 - 5 + 5;
    document.getElementById("Math5").innerHTML = "Ten divided by five times two minus five plus five is... " + multi+".";
}

function modulus() {        //Find remainder
    var remainder = 52 % 5;
    document.getElementById("Math6").innerHTML = "Fifty-two divided by five leaves a remainder of... " + remainder+".";
}

function negation() {       //Inverse a number(turn negative or positive)
    var num = 50;
    document.getElementById("Math7").innerHTML = "The negation number of fifty is... " + (-num)+".";
}

function incrementDecrement() {     //Incrementing and Decrementing
    var num = 10;
    num++;
    var inc = num;
    num--;
    num--;
    var dec = num;
    document.getElementById("Math8").innerHTML = "Ten incremented once is " + inc +" and decremented once is " + dec +".";
}

function randomNum() {      //Produce random number between 0 and 10
    var ranNum = (Math.random() * 10);
    document.getElementById("Math9").innerHTML = "This number will be between zero and ten randomly..." + ranNum + ".";
}

function randomRound() {    //Produce random rounded number between 0 and 10
    var ranNum = Math.random() * 10;
    roundNum = Math.round(ranNum);
    document.getElementById("Math10").innerHTML = "This number will be between zero and ten randomly but rounded... " + roundNum + ".";
}
