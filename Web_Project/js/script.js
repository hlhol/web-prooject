//Slider

var counter=1;
setInterval(() => { //select ratio followed with the current counter
    document.getElementById('radio' + counter).checked = true;
    counter++;

    if (counter > 4) {  // If the counter exceeds 4 
        counter = 1; //reset it to 1
    }
}, 3000); // 3000 milliseconds equals 3 seconds