/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function(nums) {
    let hashTable = {};
    for(let num of nums) {
        if(num%2===0) {
            hashTable[num] = (hashTable[num] || 0) + 1;
        }
    }
   const arr = Object.entries(hashTable);
   if(arr.length < 1) return -1;
   arr.sort((a, b) => b[1] - a[1]);
   let largestCount = arr[0][1];
   let ray = [];
   for(let miniRay of arr) {
    if(miniRay[1] === largestCount) ray.push(parseInt(miniRay[0]))
   }
   return ray[0];

};