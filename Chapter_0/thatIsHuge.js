// Whoa, That Sucker's Huge...
// Add odd integers from -300,000 to 300,000, and console.log the final sum. Is there a shortcut?

// Original solution

function thatIsHuge() {
    var sum = 0;
    for(var i = -300000; i <= 300000; i++) {
        if(i%2 == 1) {
            sum += i;
        }
    }
    console.log(sum);
}

// Optimized solution
function TIH() {
    var sum = 0;
    for(var i = -300000; i < 0; i++) {
        if(i%2 == 1) {
            sum += i + Math.abs(i);
        }
    }
    console.log(sum);
}
