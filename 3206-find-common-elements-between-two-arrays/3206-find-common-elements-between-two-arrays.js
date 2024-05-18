/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var findIntersectionValues = function(nums1, nums2) {
    let result = [];
    let num1Set = new Set([...nums1]);
    let num2Set = new Set([...nums2]);

    const checkValues = (arr, set, result) => {
        let count = 0;
        let verifiedValues = [];
        for(let i = 0; i < arr.length; i++) {
            if(set.has(arr[i])) verifiedValues.push(arr[i]);
        }
        count = verifiedValues.length
        result.push(count);
    }

    checkValues(nums1, num2Set, result);
    checkValues(nums2, num1Set, result);
    return result;
};

