// JavaScript Source Code

/*Write a function called validBraces that takes a string of braces, and determines if the order of the braces is valid. validBraces should return true if the string is valid, and false if it's invalid.

This Kata is similar to the Valid Parentheses Kata, but introduces four new characters. Open and closed brackets, and open and closed curly braces. Thanks to @arnedag for the idea!

All input strings will be nonempty, and will only consist of open parentheses '(' , closed parentheses ')', open brackets '[', closed brackets ']', open curly braces '{' and closed curly braces '}'.

What is considered Valid? A string of braces is considered valid if all braces are matched with the correct brace.
For example:
'(){}[]' and '([{}])' would be considered valid, while '(}', '[(])', and '[({})](]' would be considered invalid.

Examples:
validBraces( "(){}[]" ) => returns true
validBraces( "(}" ) => returns false
validBraces( "[(])" ) => returns false
validBraces( "([{}])" ) => returns true */

function validBraces(braces) {
    // remove sequential pairs until no more can be found
    while (braces.indexOf("{}") != -1 || braces.indexOf("()") != -1 || braces.indexOf("[]") != -1) {
        braces = braces.replace("{}", "").replace("()", "").replace("[]", "");
    }
    // true if everything paired off leaving string empty, false otherwise
    return braces.length == 0;
}

// old worse method
function validBraces2(braces) {
    var pairs = { '(': ')', '{': '}', '[': ']' };
    var stack = []; // stack up our opening braces waiting to be paired
    var currentChar;
    for (i in braces) {
        currentChar = braces[i];
        if (pairs[currentChar]) {
            // if char is a property, we're dealing with opening brace - add to stack and continue
            stack.push(currentChar);
        }
        else {
            // It's not an opening brace
            // Pop the last entry to stack.  Return false if it wasn't the pair to current char, else continue
            if (currentChar !== pairs[stack.pop()]) {
                return false;
            }
        }
    }
    // When whole string is processed, make sure there's no extra opening braces in the stack
    return stack.length === 0;
}


console.log(validBraces2("(){}[]"));
console.log(validBraces2("(}"));
console.log(validBraces2("[(])"));
console.log(validBraces2("([{}])"));
console.log(validBraces2("((([]])))"));

phantom.exit();