// JavaScript Source Code

// Write a function capitals that takes a single string (word) as argument.
// The functions must return an ordered list containing the indexes of all
// capital letters in the string.
// Test.assertSimilar(capitals('CodEWaRs'), [0, 3, 4, 6]);

var capitals = function(word) {
    var output = [];
    for (i in word) {
        if (word[i] == word[i].toUpperCase()) {
            output.push(parseInt(i));
        };
    };
    return output;
};