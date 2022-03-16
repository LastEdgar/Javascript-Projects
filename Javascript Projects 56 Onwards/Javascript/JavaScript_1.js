function animal_Reply() { //Assignment 56
    var reply;
    var pet_input = document.getElementById("animal_choice").value;
    var reply_String = "? Those make excellent pets!";
    switch (pet_input) {
        case "Dog":
            reply = "Dogs" + reply_String;
            break;
        case "Cat":
            reply = "Cats" + reply_String;
            break
        case "Bird":
            reply = "Birds" + reply_String;
            break
        case "Reptile":
            reply = "Reptiles" + reply_String;
            break
        case "Fish":
            reply = "Fish" + reply_String;
            break
        case "Other":
            reply = "Other animal" + reply_String;
            break
        default:
            reply = "Please enter an animal exactly as spelled above, including captials.";
    }
    document.getElementById("reply").innerHTML = reply;
}

function getClass() { //Assignment 57, getbyclass
    let x = document.getElementsByClassName("changeMe");
    x[1].innerHTML = "Now, I am a new man, stronger than before."
}

function myCanvas() { //Challenge 16
    var c = document.getElementById("paint");
    var d = c.getContext("2d");
    d.beginPath();
    d.arc(195, 150, 100, 0, 5 * Math.PI);
    d.stroke();
}

function canvas2() { //Challenge 17
    var c = document.getElementById("can2");
    var ctx = c.getContext("2d");
    var grad = ctx.createLinearGradient(0, 0, 200, 90);
    grad.addColorStop(0, "blue");
    grad.addColorStop(1, "red");

    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 200, 150);
}