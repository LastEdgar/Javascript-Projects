function Ride_Function() { //Ride function using ternary operators
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Vote_Age() { //2nd function using ternary
    var Age, can_vote;
    Age = document.getElementById("Age").value;
    can_vote = (Age < 18) ? "You are too young" : "You are eligible";
    document.getElementById("Vote").innerHTML = can_vote + " to vote.";
}

function vehicle(make, model, year, colour) { //Constructor example practice
    this.vehicle_make = make;
    this.vehicle_model = model;
    this.vehicle_year = year;
    this.vehicle_colour = colour;
}
var Jack = new vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
        "Erik drives a " + Erik.vehicle_colour + "-coloured " + Erik.vehicle_model +
        " manufactured in " + Erik.vehicle_year + ".";
}

function Entry(fullname, age, hair_colour) { //Second constructor
    this.Entry_fullname = fullname;
    this.Entry_age = age;
    this.Entry_hair_colour = hair_colour;
}
var Tom = new Entry("Tom Riddle", 52, "bald");
function newEntry() {
    document.getElementById("New_and_This").innerHTML =
        "My new friend is " + Tom.Entry_fullname + ". He is " + Tom.Entry_age + " and " + Tom.Entry_hair_colour + ". Cool snake though.";
}

function nestFunc() { //Nested functions
    document.getElementById("Nested_Function").innerHTML = Nester();
    function Nester() {
        let x = (Math.random() * 100);
        return x;
        }
}