// Setting and Swapping
// Set myNumber to 42. Set myName to your name. Now swap myNumber into myName and vice versa.

// Modified this to accept parameters.

function setAndSwap(num, name) {
    var temp = num;
    num = name;
    name = temp;
    console.log("My number is:", num);
    console.log("My name is:", name);
}
