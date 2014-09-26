// JavaScript Source Code

// Create a function, which escapes all HTML markup of a given string.
// Replacing entities of special characters is not needed.
// Examples say more than words:
//      var strEscaped = escapeHTML('<p>Lorem ipsum dolor sit amet.</p>');
//          &lt;p&gt;Lorem ipsum dolor sit amet&lt;/p&gt;
//      var strEscaped = escapeHTML('This text has <strong>bold</strong> markup.');
//          This text has &lt;strong&gt;bold&lt;/strong&gt; markup.
// Watch carefully all test fixtures. If you pass all of them, you have solved it.

var escapeHTML = function (str) {
    // define what needs escaped
    var htmlEscapes = {
        '<': '&lt;',
        '>': '&gt;',
        '&': '&amp;',
        '"': '&quot;'
    };
    // invoke RegExp constructor to dynamically generate regex from htmlEscapes object by enumerating over indices (Object.keys method) and joining eg regex = /<|>|&|"/g
    var regex = new RegExp(Object.keys(htmlEscapes).join("|"), "g");
    // replace regex hits with paired values 
    return str.replace(regex, function(hit) {
        return htmlEscapes[hit];
    });
};