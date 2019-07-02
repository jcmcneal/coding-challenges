/**
 * You are in charge of the cake for your niece's birthday and have decided the cake will have
 * one candle for each year of her total age. When she blows out the candles, she’ll only be
 * able to blow out the tallest ones. Your task is to find out how many candles she can successfully blow out.
 *
 * For example, if your niece is turning 4years old, and the cake will
 * have 4 candles of height 4, 4, 1, 3, she will be able to blow out 2 candles successfully, since
 * the tallest candles are of height 4 and there are 2 such candles.
 */

/**
 * birthdayCakeCandles
 * @param {array} arr
 */
const birthdayCakeCandles = (arr) => {
    const map = {};
    let max;

    arr.forEach((next) => {
        // Keep count of occurrance
        map[next] = (map[next] || 0) + 1;

        // Update max
        if (!max || next > max) max = next;
    }, 0);

    return map[max];
};

console.log(birthdayCakeCandles([4, 4, 3, 1])); // 2
console.log(birthdayCakeCandles([5, 4, 3, 1])); // 1
