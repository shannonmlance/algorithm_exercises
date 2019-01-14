// Print And Count
// Print all imteger multiples of 5, from 512 to 4096. Afterward, also log how many there were.

// Made this function to accept numbers as parameters, and returned count instead of printing it.

function printAndCount(min, max, div) {
    try {
        var count = 0;
        for(var i = min; i <= max; i++) {
            if(i%div == 0) {
                console.log(i);
                count ++;
            }
        }
    }
    catch(err) {
        return "Parameter must be an integer."
    }
    return count;
}
