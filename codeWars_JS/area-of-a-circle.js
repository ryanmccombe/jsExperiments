//  JavaScript Source Code
/*  Complete the function circleArea so that it will return the area of a circle with the given radius.
    Round the returned number to two decimal places. If the radius is not positive or not a number, return false.

    Example:
    circleArea(-1485.86);    //returns false
    circleArea(0);           //returns false
    circleArea(43.2673);     //returns 5881.25
    circleArea(68);          //returns 14526.72
    circleArea("number");    //returns false

*/

var circleArea = function (radius) {
    if (radius > 0) {
        return (Math.round(Math.PI * radius * radius * 100) / 100)
        
    }
    return false;
};

// return (Math.PI * radius * radius).toFixed(2) also works