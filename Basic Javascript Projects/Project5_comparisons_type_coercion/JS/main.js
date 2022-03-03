document.write(typeof "Tom"); //Using document.write but it deletes html so gotta be first

function typeInput() { //Display data type
    document.getElementById("type").innerHTML= (typeof 10);
}
 
function infinity() { //Display infinity
    var x = 4E410;
    document.getElementById("Infin").innerHTML = x;
    
}

function negInfinity() { //Display -infinity
    var y = -4E420; 
    document.getElementById("negInfin").innerHTML = y;
}

function bools() { //Display true
    let x = (10 > 2);
    document.getElementById("bool").innerHTML = x;
}

function bools2() { //Display false
    let y = 10 < 2;
    document.getElementById("bool2").innerHTML = y;
}

function logIt() { //Display to console
    console.log(10 + 7); //Log an integer
    console.log(10 < 8); //Log a boolean
}

function typeCoer() { //Use type coercion to add string and num
    let x = ("10" + 8);
    document.getElementById("typeCo").innerHTML = x;
}

function bools3() { //Use == to return values
    console.log(10 == 10); //Return true
    console.log(10 == 11); //Return false
}

function bools4() { //Use === to return values
    let a = 5,
        b = 5,
        c = "5",
        d = "Red",
        e = "White";
    console.log(a === b); //True by same value/type
    console.log(a === d); //False by diff value/type
    console.log(b === c); //False by same value diff type
    console.log(d === e); //False by same type diff value
}

function bools5() { //Use &&, || operators
    console.log(5 > 2 && 10 > 9); //And true
    console.log(5 > 2 && 9 > 10); //And false
    console.log(5 > 2 || 9 > 10); //Or true
    console.log(5 < 2 || 10 < 9); //Or false
}

function bools6() { //Use ! operator
    console.log(!(10 < 5)); //10 is not greater than 5 so true
    console.log(!(10 > 5)); //10 is greater than 5 so "not" is false
}