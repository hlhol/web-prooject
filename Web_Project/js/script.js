// Get data from the form:
let firstName = document.getElementById('firstName').value; 
let lastName = document.getElementById("lastName").value;
let email = document.getElementById("email").value;
let mobile = document.getElementById("mobileNum").value;

// validate the inputes to ensure they are not empty and with some specific format
if (firstName.length && lastName.length > 2) {
    if (email.includes("@") && email.includes(".")) {
        if (mobile.length == 8){
            
        }else{
            console.log("Please enter your mobile number proberly");
        }
    }else{
        console.log("Please enter your email proberly");
    }
}else {
    console.log("Please enter your first and last name proberly it must be minumum 3 characters");
}