function validateForm() {
    let x = document.forms["myForm"]["name"].value;
    if (x == "")
    {
        alert("Name must be filled in.");
        return false;
        }
    let y = document.forms["myForm"]["email"].value;
    if (y == "")
    {
        alert("Email must be filled in.");
        return false;
        }
    let z = document.forms["myForm"]["message"].value;
    if (z == "")
    {
        alert("Message must not be blank.")
        return false;
        }
    
}