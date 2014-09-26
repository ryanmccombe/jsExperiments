// JavaScript Source Code

/*Your objective is to add formatting to a plain number to display it as price.

The function should return a string like this:

var price = numberToPrice(13253.5123);
console.log(price); // 13,253.51

Numbers should use the standard comma for every 3 numbers and dot to separate the cents, cents need to be truncated to 2 decimals, in the case that the decimal part of the number is 1 character long or none you should add 0's so that the result will always have 2 decimal characters, the function will also evaluate negative numbers.

function should return a string 'NaN' if the input is not a valid number
*/

// String manipulation method - truncating by math gives rounding errors
var numberToPrice = function (number) {
    if (typeof number != "number") { return "NaN" }
    var string = number.toString().split(".");  //convert to decimal seperated array
    if (string.length < 2) { string[1] = "00" }; //if number had no decimal point, create second index
    while (string[1].length <= 2) { string[1] = string[1].concat("0") }; //if number had <2 decimals, pad to 2
    return string[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") + "." + string[1].substr(0,2); //add commas and combine
};

// Math method - unpredicable results when truncating - 1,234,567.89 * 100 = 123,456,788.99999999
var numberToPrice3 = function (number) {
    if (typeof number != "number") { return "NaN" }
    return (parseInt(number * 100) / 100) // truncate decimals
                .toFixed(2) // force decimal padding to 2 places
                .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"); // add commas
};

// Combination of math + string passes all test cases, may still have outliers
var numberToPrice2 = function (number) {
    if (typeof number != "number") { return "NaN" }
    return number.toFixed(3) // round to 3 decimal places
                 .replace(/\d$/, "")  // truncate the last
                 .replace(/(\d)(?=(?:\d{3})+\.)/g, "$1,")  // add commas
}

/*
var numberToPrice = function(n) {
   return typeof n != 'number' ? 'NaN' : n.toFixed(3).replace(/\d$/, '').replace(/(\d)(?=(?:\d{3})+\.)/g, '$1,')
}
 */

console.log(numberToPrice(1234567.89));
console.log(numberToPrice(-1));
console.log(numberToPrice(-12.2));

/*var benchmark = function () {
    console.log("1,000,000 Iterations - 05 Runs - Much Excite")
    for (var p = 1; p <= 5; p++) {
        iterations = 1000000;
        start1 = +new Date();
        for (var i = 0; i < iterations; i++) {
            f();
        };
        end1 = +new Date();
        diff1 = (end1 - start1);

        iterations = 1000000;
        start2 = +new Date();
        for (var i = 0; i < iterations; i++) {
            f();
        };
        end2 = +new Date();
        diff2 = end2 - start2;
        console.log("0" + p + " | " + diff1 + "ms | " + diff2 + "ms | (" + (Math.round(diff2 / diff1 * 10000) / 100) + "%)");
    };
    console.log("Very Complete")
};

benchmark();
*/
phantom.exit();