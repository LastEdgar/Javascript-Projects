function get_todos() { //Gets task from input
    var todos = new Array; //Makes array of input tasks
    var todos_str = localStorage.getItem('todo'); //checks if tasks saved in web memory
    if (todos_str !== null) { //If input isnt null then JSON.parse makes task a JS object
        todos = JSON.parse(todos_str);
    }
    return todos;
}

function add() {  //Adds an input task to the function array
    var task = document.getElementById('task').value; //Takes input and makes variable of it

    var todos = get_todos(); //calls array
    todos.push(task);  //Adds new task to end of array
    localStorage.setItem('todo', JSON.stringify(todos)); //converts task to JSON string
    document.getElementById("task").value = "";
    show();

    return false;
}

function show() {  //This keeps tasks shown on screen
    var todos = get_todos(); //Calls array again
    var html = '<ul>'; //Sets each task as unordered list
    for (var i = 0; i < todos.length; i++) {
        html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">x</button></li>';
    };
    html += '</ul>'; //Closes list
    document.getElementById('todos').innerHTML = html; //displays task as list
    var closers = document.getElementsByClassName('remove');
    for (var i = 0; i < closers.length; i++){
        closers[i].addEventListener('click', removeItem)
    }
}

document.getElementById('add').addEventListener('click', add); //Displays input task when add button is clicked
show(); //Keeps elements permanently on screen

function removeItem() {
    var id = this.getAttribute('id'); //make ids
    var todos = get_todos(); //call array
    todos.splice(id, 1); //insert ids for each element
    localStorage.setItem('todo', JSON.stringify(todos)); //make into JSON string
    show();  //Show actually removes the item

    return false;
}