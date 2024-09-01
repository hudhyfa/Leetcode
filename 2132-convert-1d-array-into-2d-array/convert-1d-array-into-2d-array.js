/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function(original, m, n) {
    if(m * n !== original.length) return [];
    let miniRay = [], result = []; count = 0;
    for(let i = 0; i <= original.length - 1; i++) {
        miniRay.push(original[i]);
        ++count;
        if(count === n) {
            result.push(miniRay);
            miniRay = [];
            count = 0;
        }
    }
    
    return result;
};