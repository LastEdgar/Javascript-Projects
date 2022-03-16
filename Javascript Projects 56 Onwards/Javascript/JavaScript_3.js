function displayExample(food) {
    let foodType = food.getAttribute("data-food-type");
    let x = food.innerHTML.toLowerCase();
    alert(foodType + " is an example of a " + x + ".");
}