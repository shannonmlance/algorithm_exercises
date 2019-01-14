// Print -52 to 1066
// Print integers from -52 to 1066 using a for loop.

// Modified this to accept parameters.

function printNumsForLoop(num1, num2) {
    if(typeof num1 != "number" || typeof num2 != "number") {
        console.log("Error: variables must be a number.");
        return;
    }
    for(var i = Math.floor(num1); i <= Math.floor(num2); i++) {
        console.log(i);
    }
}
