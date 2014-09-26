// JavaScript Source Code

// Write a function called scoreHand that determines the score of a hand in the card game Blackjack (aka 21).
// This function takes one parameter which is an array of strings that represent each card in the hand.
// Each card will be one of the following strings: "2",..,"10", "J", "Q", "K", "A"

// It returns a number which is the score of the hand. Return the highest score of the cards that is less than or equal to 21.
// If there is no score less than or euqal to 21 return the smallest score more than 21.
// Scoring rules: In Blackjack number cards count as their face value (2 through 10). Jack, Queen and King count as 10. An Ace can be counted as either 1 or 11.

// Examples:
//  scoreHand(["A"]); //=> 11
//  scoreHand(["A", "J"]); //=> 21
//  scoreHand(["A", "10", "A"]); //=> 12
//  scoreHand(["5", "3", "7"]); //=> 15
//  scoreHand(["5", "4", "3", "2", "A", "K"]); //=> 25


// Using Array.map method
function scoreHand(cards) {
    // map cards to score and count aces
    var aces = 0
    var scores = cards.map(function (card) {
        if (card == "A") {
            aces++;
            return 11;
        }
        else if (card == "K" || card == "Q" || card == "J") {
            return 10;
        }
        else {
            return parseInt(card);
        };
    });
    // calculate total score
    var sum = scores.reduce(function (a, b) {
        return a + b;
    });
    // devalue aces if required
    while (sum > 21 && aces > 0) {
        sum -= 10;
        aces--;
    };
    return sum;
};


// Using RegExp.test method
function scoreHand2(cards) {
    var aces = 0;
    // Calculate total score and count aces
    var score = cards.reduce(function (score, card) {
        if (card === 'A') {
            aces++;
            return score + 11;
        };
        return /J|Q|K/g.test(card) ? score + 10 : score + parseInt(card);
    }, 0);
    // devalue aces if required, terse (but hackey?)
    while (aces-- && score > 21) score -= 10;
    return score;
};