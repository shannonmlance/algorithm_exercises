// Printing Integers with While
// Print integers from 2000 to 5280, using a while loop.

// Modified this to accept parameters.

function printNumsWhileLoop(num1, num2) {
    if(typeof num1 != "number" || typeof num2 != "number") {
        console.log("Error: variables must be a number.");
        return;
    }
    var i = Math.floor(num1);
    while(i <= Math.floor(num2)) {
        console.log(i);
        i++;
    }
}
