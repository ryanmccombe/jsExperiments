// JavaScript Source Code

/*
The problem with truly random numbers in games is that they tend to not feel random to humans.
For example, if you flip a coin 100 times, you'll probably see four heads or four tails in a row during that time.
But if that happens in a game, the player tends to think that the game is "broken" and will get frustrated.
The task here is to implement a new random number generator called RNG that follows different rules.
The constructor will take a parameter, n, which gives the upper bound. The generator will output integers between 0 and n (not including n).
The rand method will output the next random number.
rand will work in cycles of length n, and during each cycle, it will output every possible number. So if n = 2, then the sequences:

1, 0, 1, 0
0, 1, 0, 1
0, 1, 1, 0
1, 0, 0, 1

are all possible, but

1, 1, 0, 1
1, 1, 1, 1
0, 0, 0, 1

are not possible, because they do not output every number in each cycle. 

 */

var RNG = function (n) {
    this.n = n;
    // fill numbers[] with range of possible outputs, pool[] will hold outputs that are still available for each cycle
    this.numbers = [], this.pool = [];
    for (var i = 0; i < n; i++) {
        this.numbers.push(i);
    };
};

RNG.prototype.rand = function () {
    // reload pool from numbers if its empty
    if (this.pool.length < 1) {
        this.pool = this.numbers.slice();
    }
    // return and remove a random number from the pool
    return parseInt((this.pool.splice(Math.floor(Math.random() * this.pool.length), 1)));
};



// alternative - no cache - recreate array every cycle - benchmarks 3-5% slower
var RNG2 = function (n) {
    this.n = n;
    this.pool = [];
};

RNG2.prototype.initPool = function () {
    this.pool = [];
    for (i = 0; i < this.n; i++)
        this.pool.push(i);
};

RNG2.prototype.rand = function () {
    if (this.pool.length < 1) {
        this.initPool();
    }
    return parseInt((this.pool.splice(Math.floor(Math.random() * this.pool.length), 1)));
};