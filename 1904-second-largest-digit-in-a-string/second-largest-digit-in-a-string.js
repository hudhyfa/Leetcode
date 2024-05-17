/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
    let nums = new Set([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    let numSet = new Set();
    for(let char of s) {
        if(nums.has(parseInt(char))) {
            if(!numSet.has(parseInt(char))) numSet.add(parseInt(char));
        }
    }
    let numRay = Array.from(numSet);
    if(numRay.length > 1) {
        let sortedRay = numRay.sort((a, b) => b - a);
        return sortedRay[1];
    } else {
        return -1;
    }
    
};