// JavaScript Source Code


/*Write a function called validParentheses that takes a string of parentheses, and determines if the order of the parentheses is valid. validParentheses should return true if the string is valid, and false if it's invalid.

Examples:
validParentheses( "()" ) => returns true
validParentheses( ")(()))" ) => returns false
validParentheses( "(" ) => returns false
validParentheses( "(())((()())())" ) => returns true

All input strings will be nonempty, and will only consist of open parentheses '(' and/or closed parentheses ')'
*/

function validParentheses(str) {
    var open = 0;
    for (i in str) {
        // "All input strings will only consist of parentheses"
        str[i] == "(" ? open++ : open--;
        // confirm order - should never close more parens than are open
        if (open < 0) { return false; }
    };
    // confirm balance
    return open == 0;
};

// For strings that aren't just parens

// The RegExp.prototype.exec() method executes a search for a match in a specified string. Returns a result array, or null.
// If your regular expression uses the "g" flag, you can use the exec method multiple times to find successive matches in the same string.
// When you do so, the search starts at the substring of str specified by the regular expression's lastIndex property
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec

function validParentheses2(str) {
    var regex = /[()]/g, c, open = 0;
    while ((c = regex.exec(str)) !== null) {
        if (c == "(") {
            open++;
        }
        else if (c == ")") {
            open--;
            if (open < 0) {
                return false;
            };
        };
    };
    return open == 0;
}