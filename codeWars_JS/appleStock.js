// JavaScript Source Code
/*
 I have an array stockPricesYesterday where:

    The indices are the time, as a number of minutes past trade opening time, which was 9:30am local time.
    The values are the price of Apple stock at that time, in dollars.

For example, the stock cost $500 at 10:30am, so stockPricesYesterday[60] = 500.

Write an efficient algorithm for computing the best profit I could have made from 1 purchase and 1 sale of 1 Apple stock yesterday.

You must buy before you sell.

You can do this in O(n) time.
 */

var stockPricesYesterday = [55, 65, 55, 30, 85, 45, 95, 30, 50, 10, 35, 25, 55, 10]
//                                      30 -------> 95

// O(n) cycles and O(1) memory
function maxProfit(prices) {
    var lowest = Infinity, highest = 0, profit = 0;
    for (i in prices) {
        if (prices[i] < lowest) {
            lowest = prices[i];
        }
        if (prices[i] > highest) {
            highest = prices[i];
        }
        if (prices[i] - lowest > profit) {
            profit = prices[i] - lowest;
        }
    }
    return profit;
}
