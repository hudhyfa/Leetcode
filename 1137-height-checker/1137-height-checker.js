/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
    let count = 0; indice = 0;
    let reality = [...heights];
    let expected = heights.sort((a, b) => a - b);
    while(indice < heights.length) {
        if(reality[indice] != expected[indice]) count++;
        ++indice;
    }
    return count;
};