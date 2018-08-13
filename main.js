function validateForm() {
    let firstName = document.forms["myForm"]["firstName"].value;
    let lastName = document.forms["myForm"]["lastName"].value;
    let email =  document.forms["myForm"]["email"].value;
    if (firstName === "") {
        alert(" First Name must be filled out");
        return false;
    }
    else if(lastName === "") {
        alert(" Last Name must be filled out");
        return false;
    } else if (email === "") {
        alert(" Email must be filled out");
        return false;
    }
}