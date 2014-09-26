// Javascript Source File

// Your goal in this kata is to implement an array_diff function, which subtracts one array from another.
// It should remove all values from array a, which are present in array b.
//    array_diff([1,2], [1]) // [2]
// If a value is present in array b, all of its occurrences must be removed from array a.
//    array_diff([1,2,2], [2]) // [1]

function array_diff(a, b) {
    if (Array.isArray(a) && Array.isArray(b)) {
        //filter a, returning values that don't exist (have index -1) in b
        return a.filter(function (i) {
            return b.indexOf(i) < 0;
        });
    };
    //bad input
    console.log("array_diff(a, b) requires 2 arrays, returns array");
    return Array.isArray(a) ? a : [];
};