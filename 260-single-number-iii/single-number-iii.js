/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    let obj = {};
    let result = [];
    for(let num of nums) {
        obj[num] = (obj[num] || 0) + 1;
    }
    let ray = Object.entries(obj);
    for(let subray of ray) {
        if(subray[1] === 1) result.push(subray[0]);
    }
    return result;
};