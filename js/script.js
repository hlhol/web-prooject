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
    let firstName = document.getElementById('first_name').value; 
    let lastName = document.getElementById("last_name").value;
    let email = document.getElementById("emailAddress").value;
    let mobile = document.getElementById("Mobile_Number").value;

    if (firstName.length && lastName.length > 2) {
        if (email.includes("@") && email.includes(".")) {
            if (mobile.length == 8){
                console.log("Your data has been saved successfully in local storage");
                localStorage.setItem("firstName", firstName);
                localStorage.setItem("lastName", lastName);
                localStorage.setItem("email", email);
                localStorage.setItem("mobileNum", mobile);
                
                showNotification("Your data has been saved successfully!", true);

                document.getElementById("form").reset();
                retriveName();
                
            } else {
                console.log("Please enter your mobile number properly");
                showNotification("Please enter your mobile number properly", false);
            }
        } else {
            console.log("Please enter your email properly");
            showNotification("Please enter your email properly", false);
        }
    } else {
        console.log("Please enter your first and last name properly; they must be at least 3 characters.");
        showNotification("Please enter your first and last name properly; they must be at least 3 characters.", false);
    }
};

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
    
const showNotification = (message, isSuccess = true) => {
    const notification = document.getElementById("notification");
    const messageElement = document.getElementById("notification-message");
    
    messageElement.innerText = message;
    notification.style.backgroundColor = isSuccess ? "#4caf50" : "#f44336";

    notification.classList.remove("hidden");
    notification.style.opacity = "5";
    notification.style.top = "20px";

    setTimeout(() => {
        hideNotification();
    }, 3000);
};

const hideNotification = () => {
    const notification = document.getElementById("notification");
    notification.style.opacity = "0";
    notification.style.top = "0px";
    setTimeout(() => {
        notification.classList.add("hidden");
    }, 300); 
};

document.getElementById("close-notification").addEventListener("click", hideNotification);
