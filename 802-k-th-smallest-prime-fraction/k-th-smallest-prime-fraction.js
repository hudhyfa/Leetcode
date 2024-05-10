/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var kthSmallestPrimeFraction = function(arr, k) {
    let map = new Map();
    let fractions = [];
    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            map.set((arr[i]/arr[j]), [arr[i], arr[j]])
            fractions.push(arr[i]/arr[j]);
        }
    }
    fractions = fractions.sort((a, b) => a - b);
    return map.get(fractions[k - 1])
};