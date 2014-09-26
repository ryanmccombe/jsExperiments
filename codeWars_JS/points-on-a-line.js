// JavaScript Source Code

/* Given an array points (cartesian coordinates), return true if all of them can lie on a line.

    onLine([[1,2], [7, 4], [22, 9]]);                       // returns true
    onLine([[1,2], [-3, -14], [22, 9]]);                     // returns false

The input will contain at least two points containing valid integers.

*/

function onLine(points) {
    // 1 or 2 points can always lie on a straight line
    if (points.length <= 2) {
        return true;
    };
    // calculate slope from first 2 points
    var slope = ((points[1][1] - points[0][1]) / (points[1][0] - points[0][0]));
    // starting from third point, check each point against last point, break on first miss
    for (var i = 2; i < points.length; i++) {
        if ((points[i][1] - points[i - 1][1]) / (points[i][0] - points[i - 1][0]) != slope)
            return false;
    };
    return true;
};