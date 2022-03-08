function concats1() { //Assignment #44, concat
    var a = "This ",
        b = "goes ",
        c = "together.";
    d = a + b + c;
    document.getElementById("concat1").innerHTML = d;
}

function slicer() { //Assignment #45, slicing
    var a = "All of the things I could want for are in this room Sara.";
    var slice = a.slice(52,56);
    document.getElementById("slice").innerHTML = slice;
}

function upperAndSearch() { //Challenge #10, uppercase and search
    var a = " Lots of work to make an impact.",
        b = a.toUpperCase(), //Makes string uppercase
        place = b.search("IMPACT"); //Searches for uppercase of the word in string
        
    document.getElementById("upperCaseAndSearch").innerHTML = place; 
    
}

function makeString() { //Assignment #46, makes a string
    var a = 100, 
        result = a.toString(); //Used other method to test, is it supposed to return in quotes?
    
    document.getElementById("toString").innerHTML = result;
}

function precision() { //Assignment #47, specify length of number
    var a = 865496.293392823;
    document.getElementById("precision").innerHTML = a.toPrecision(9);
}

function toFix() { //Challenge 11 part 1 toFix to 2 digits
    var a = 2910.2929230;
    document.getElementById("toFix").innerHTML = a.toFixed(2);
}

function getValueOf() { //Challenge 11 part 2 valueOf
    var a = "Totally";
    document.getElementById("getValue").innerHTML = a.valueOf();
}