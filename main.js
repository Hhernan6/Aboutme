function validateForm() {
    var firstName = document.forms["myForm"]["firstName"].value;
    var lastName = document.forms["myForm"]["lastName"].value;
    var email = lastName = document.forms["myForm"]["email"].value;
    if (firstName === "") {
        alert(" First Name must be filled out");
    };
    if (lastName === "") {
        alert(" Last Name must be filled out");
    }
    if (email === "") {
        alert(" Email must be filled out");
    }
}