// You Say It's Your Birthday
// If 2 given numbers represent your birth month and day in either order, log "How did you know?", else log "Just another day..."

function birthday(num1, num2) {
    if(typeof num1 != "number" || typeof num2 != "number") {
        console.log("Error: variables must be a number.");
        return;
    }
    if((Math.floor(num1) == 3 && Math.floor(num2) == 10) || (Math.floor(num1) == 10 && Math.floor(num2) == 3)) {
        console.log("How did you know?");
    }
    else {
        console.log("Just another day...");
    }
}
