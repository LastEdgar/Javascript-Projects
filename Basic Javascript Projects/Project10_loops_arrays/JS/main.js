function Call_Loop() { //Assignment 50, while loop
    var num = "",
        x = 1;
    while (x < 6) {
        num += "<br>" + x;
        x++;
    }
    document.getElementById("Loop").innerHTML = num;
}

function getLength() { //Challenge 13, get length of string
    let x = "Hello Hello Hello",
        y = x.length;
    document.getElementById("lengthy").innerHTML = y;
}

let instruments = ["Drums", "Guitar", "Bass", "Synth"], //Assignment 51, for loop
    content = "",
    z;
function for_Loop() {
    for (z = 0; z < instruments.length; z++) {
        content += instruments[z] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = content;
}


function array_Function() { //Assignment 52, array
    const cheese_array = ["Gouda","Cheddar","Parmesan","Havarti","Brie"];
    let j = Math.floor(Math.random() * 5);
    document.getElementById("Array").innerHTML = "Today's cheese of the day is " + cheese_array[j]+".";
}

function constant_Function() { //Assignment 53, constant with changes
    const const_array = {name:"Ian", age:"25", hair_colour:"black"};
    const_array.age = "26";
    const_array.weight = "160";
    document.getElementById("Constant").innerHTML = "This is " +const_array.name + ", a " +const_array.age+ " year old weighing "+const_array.weight+ "lbs."
}

function let_Function() { //Assignment 54, using let
    var x = 10;
    console.log(x);
    {
        let x = 20;
        console.log(x);
    }
    console.log(x);
}
function outer_return() { //Challenge 14, return
    document.getElementById("returner").innerHTML = return_Function();
    function return_Function() {
        return (Math.random() * 100);
        
    }
}

function object_Function() { //Assignment 55, objects with let
    let bicycle = {
        brand: "Kona",
        type: "Outback",
        year: "2017",
        colour: "black",
        info: function bikeRun() {
            return "My bike is a " + this.year +" "+ this.brand +" "+ this.type + " in " + this.colour + ".";
        }
    
    };
    document.getElementById("object").innerHTML = bicycle.info();
}

function breakContinue() { //Challenge 15, break and continue loops, skip 7, end on 3
    let write = "";
    for (let x = 10; x > 0; x--){
        if (x == 7) { continue; }
        write += x + "<br>";
        if (x == 3) { break; }
    }
    document.getElementById("breakCon").innerHTML = write;
}