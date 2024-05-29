/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let hashMap = {};
    for(let num of nums) {
        hashMap[num] = (hashMap[num] || 0) + 1;
    }
    let result = Object.entries(hashMap).find((subray) => subray[1] < 2)
    return result[0];
};