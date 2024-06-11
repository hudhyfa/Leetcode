/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
    let hashMap = {};
    let result = []; sortedHalf = [];
    for (let idx in arr1) {
        hashMap[arr1[idx]] = (hashMap[arr1[idx]] || 0) + 1;
    }
    for (let idx in arr2) {
        while (hashMap[arr2[idx]] > 0) {
            result.push(arr2[idx]);
            hashMap[arr2[idx]] -= 1;
        }
    }
    for (let idx in arr1) {
        if (hashMap[arr1[idx]] > 0) {
            while (hashMap[arr1[idx]] > 0) {
                sortedHalf.push(arr1[idx]);
                hashMap[arr1[idx]] -= 1;
            }
        }
    }
    sortedHalf.sort((a, b) => a - b);
    return [...result, ...sortedHalf];
};