//Slider

var counter=1;
setInterval(() => { //select ratio followed with the current counter
    document.getElementById('radio' + counter).checked = true;
    counter++;

    if (counter > 4) {  // If the counter exceeds 4 
        counter = 1; //reset it to 1
    }
}, 3000); // 3000 milliseconds equals 3 seconds

const handelLogin = () => {    
    // Get data from the form:
    let firstName = document.getElementById('firstName').value; 
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let mobile = document.getElementById("mobileNum").value;

    // validate the inputes to ensure they are not empty and with some specific format
    if (firstName.length && lastName.length > 2) {
        if (email.includes("@") && email.includes(".")) {
            if (mobile.length == 8){
                console.log("Your data has been saved successfully in local storage");
                localStorage.setItem("firstName", firstName);
                alert(done);

                document.getElementById("form").reset();
                retriveName();
                
            }else{
                console.log("Please enter your mobile number proberly");
                alert("Please enter your mobile number proberly");
            }
        }else{
            console.log("Please enter your email proberly");
            alert("Please enter your email proberly");
        }
    }else {
        console.log("Please enter your first and last name proberly it must be minumum 3 characters");
        alert("Please enter your first and last name proberly it must be minumum 3 characters");
    }
}
const switchLogin = () => {
    console.log("Toggle between Register and Login");

    let changeTo = document.getElementById("switchToLogin");

    let switchLink = document.getElementById("switcher");

    if (changeTo.innerHTML === "Register Your Details") {
        changeTo.innerHTML = "Login with Your Details";
        switchLink.innerHTML = "LOGIN INTO AN EXISTING ACCOUNT";  
    } else {
        changeTo.innerHTML = "Register Your Details";
        switchLink.innerHTML = "SIGN UP";  
    }
};

document.addEventListener("DOMContentLoaded", () => {
    retriveName();
});

const retriveName = () => {
    let name = localStorage.getItem("firstName");
    if (name) {
        document.getElementById("greeting").innerHTML = `Welcome ${name}`;
    }else{
        console.log("greeting not found in this page");
    }
}
    

