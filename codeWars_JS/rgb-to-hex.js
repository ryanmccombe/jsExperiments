// JavaScript Source Code
/*The rgb() method is incomplete. Complete the method so that passing in RGB decimal values will result in a hexadecimal representation being returned. The valid decimal values for RGB are 0 - 255. Any (r,g,b) argument values that fall out of that range should be rounded to the closest valid value.

The following are examples of expected output values:

rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3*/

function rgb(r, g, b) {
    return toHex(r) + toHex(g) + toHex(b);
}
function toHex(n) {
    if (n < 0) { n = 0 }
    else if (n > 255) { n = 255 };
    var output = n.toString(16).toUpperCase();
    return output.length < 2 ? "0" + output : output;
}

//hex to rgb
function hex(hex) {
    var result = /^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return (parseInt(result[1], 16) + ", " + parseInt(result[2], 16) + ", " + parseInt(result[3], 16));
}

