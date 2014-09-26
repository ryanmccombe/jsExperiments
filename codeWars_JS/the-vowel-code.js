// JavaScript Source Code
// Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

//    a -> 1
//    e -> 2
//    i -> 3
//    o -> 4
//    u -> 5

// For example, encode("hello") would return "h2ll4" There is no need to worry about uppercase vowels in this kata.
// Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.
// For example, decode("h3 th2r2") would return "hi there"
//For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.


// define cipher once
var cipher = ["aeiou", "12345"];

// generate regex version of cipher array
var regex = [new RegExp("[" + cipher[0] + "]", "g"), new RegExp("[" + cipher[1] + "]", "g")];

function encode(str) {
    return str.replace(regex[0], function (x) {
        return cipher[0].indexOf(x)+1;
    });
};

function decode(str) {
    return str.replace(regex[1], function (x) {
        return cipher[0].charAt(x-1);
    });
};

console.log(encode("hello"));
console.log(decode("h3 th2r2"));
phantom.exit();