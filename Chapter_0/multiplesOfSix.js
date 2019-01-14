// Multiples of Six
// Print multiples of 6 up to 60,000, using a while loop.

function multiplesOfSix() {
    var i = 0;
    while(i <= 60000) {
        if(i%6 == 0) {
            console.log(i);
        }
        i++;
    }
}
