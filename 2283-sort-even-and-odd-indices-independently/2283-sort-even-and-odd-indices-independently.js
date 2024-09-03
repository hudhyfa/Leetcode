/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortEvenOdd = function (nums) {
    let sortedOddNums = [];
    let sortedEvenNums = [];
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        i % 2 == 0 ? sortedEvenNums.push(nums[i]) : sortedOddNums.push(nums[i]);
    }
    sortedOddNums.sort((a,b) => a - b);
    sortedEvenNums.sort((a, b) => b - a);
    while(sortedOddNums.length > 0 && sortedEvenNums.length > 0) {
        result.push(sortedEvenNums.pop());
        result.push(sortedOddNums.pop());
    }
    if(sortedOddNums.length > 0) result.push(sortedOddNums.pop());
    if(sortedEvenNums.length > 0) result.push(sortedEvenNums.pop());
    return result;
};