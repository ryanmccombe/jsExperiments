// JavaScript Source Code
/*You need to write regex that will validate a password to make sure it meets the follwing criteria:

    At least six characters long
    contains a lowercase letter
    contains an uppercase letter
    contains a number

Valid passwords will only be alphanumeric characters.
*/

function validate(password) {
    // ^...$ - validate entire string, start to end
    // [a-zA-Z0-9]{6,} - must contain only alphanumeric characters, and at least 6 of them
    // (?= ... ) - lookahead syntax - once something is found, match what follows (at least 6 alphanumeric characters in this case)
    // (?=[0-9]) - match a number from 0-9
    // (?=.[1-9]) - match a number from 0-9, and any character before it
    // (?=.*[0-9]) - match a number from 0-9, and any number of characters before it
    // (?=.*[a-z])(?=.*[A-Z]) - do the same for a-z, and A-Z
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{6,}$/.test(password);
}



console.log(validate("validPassword123"))
console.log(validate("invalid"))
console.log(validate("Invalid"))
console.log(validate("invalid2"))
console.log(validate("iNvl2"))
console.log(validate("iNv:_l2"))
console.log(validate("  2iV "))
console.log(validate("i    v2"))
console.log(validate(""))
console.log(validate(null))

phantom.exit();