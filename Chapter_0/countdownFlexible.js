// Flexible Countdown
// Based on earlier "Countdown By Fours", given lowNum, highNum, mult, print multiples of mult from highNum down to lowNum, using a for loop. For (2,9,3), print 9,6,3 (on successive lines).

function countdownFlexible(lowNum, highNum, mult) {
    try {
        for(var i = highNum; i >= lowNum; i--) {
            if(i%mult == 0) {
                console.log(i);
            }
        }
    }
    catch(err) {
        return err;
    }
}
