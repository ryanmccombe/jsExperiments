// JavaScript Source Code
// It's time to create an autocomplete function! Yay!
// The autocomplete function will take in an input string and a dictionary array and return the values from the dictionary that start with the input string.
// If there are more than 5 matches, restrict your output to the first 5 results. If there are no matches, return an empty array.
//
//    Example:
//      autocomplete('ai', ['airplane','airport','apple','ball']) = ['airplane','airport']
//
// For this kata, the dictionary will always be a valid array of strings.
// Please return all results in the order given in the dictionary, even if they're not always alphabetical.
// The search should NOT be case sensitive, but the case of the word should be preserved when it's returned.
// For example, "Apple" and "airport" would both return for an input of 'a'. However, they should return as "Apple" and "airport" in their original cases.
// 
// For example, an input of "$%^" should be treated as "" and an input of "ab*&1cd" should be treated as "abcd". 

function autocomplete(input, dictionary) {
    // limit output to how many matches?
    var limit = 5;
    // Generate regex from input with non-letters stripped
    var regex = new RegExp("^" + input.replace(/[^a-z]/g, ''), 'i');
    // return hits up to limit
    var count = 0;
    return dictionary.filter(function (entry) {
        if (count < limit && regex.test(entry)) {
            count++
            return entry;
        };
    });
};

// Alternative - tests whole dictionary then slices to limit - poor performance
function autocomplete2(input, dictionary) {
    var limit = 5;
    var regex = new RegExp("^" + input.replace(/[^a-z]/g, ''), 'i');
    return dictionary.filter(function (entry) {
        return regex.test(entry);
    }).slice(0, limit);
};