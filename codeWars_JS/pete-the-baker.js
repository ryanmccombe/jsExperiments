// JavaScript Source Code
/*Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?

Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

Examples:
cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); // must return 2
cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}); // must return 0

*/

// 2
var recipe = { flour: 500, sugar: 200, eggs: 1 };
var stock = { flour: 1200, sugar: 1200, eggs: 5, milk: 200 };

// 0
var recipe1 = { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 };
var stock1 = { sugar: 500, flour: 2000, milk: 2000 };

var cakes = function (recipe, stock) {
    var cakeCounter = 0;
    // var stock = JSON.parse(JSON.stringify(stock)); //ghetto fix for test cases only - they don't reinitalise input
    while (true) {  //run until function returns
        for (ingredient in recipe) {
            // run through all ingredients in recipe - if we don't have them in stock, return the function; if we do remove from stock and continue
            if (typeof stock[ingredient] == 'undefined' || stock[ingredient] < recipe[ingredient]) {
                return cakeCounter;
            }
            else {
                stock[ingredient] -= recipe[ingredient];
            };
        };
        cakeCounter++  //complete cake made - lets go again
    };
}


/*
Some tinkering - cakes2 is 800-1000% slower, cakes3 is 300-400% slower

function cakes2(recipe, available) {
    return Object.keys(recipe).reduce(function (val, ingredient) {
        return Math.min(Math.floor(available[ingredient] / recipe[ingredient] || 0), val)
    }, Infinity)
}

function cakes3(recipe, available) {
    var numCakes = [];

    for (var key in recipe) {
        if (recipe.hasOwnProperty(key)) {
            if (key in available) {
                numCakes.push(Math.floor(available[key] / recipe[key]));
            } else {
                return 0;
            }
        }
    }

    return Math.min.apply(null, numCakes);

}
*/