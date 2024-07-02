function intersect(nums1: number[], nums2: number[]): number[] {
    let bigRay: number[] = [];
    let smallRay: number[] = [];
    let bigRayNumberCount: {[num: number]: number} = {};
    let result: number[] = [];
    if (nums1.length < nums2.length) {
        smallRay = [...nums1]
        bigRay = [...nums2]
    } else {
        bigRay = [...nums1]
        smallRay = [...nums2]
    }
    for(let num of bigRay) {
        bigRayNumberCount[num] = (bigRayNumberCount[num] || 0) + 1;
    }
    for(let num of smallRay) {
        if(bigRayNumberCount[num]) {
            result.push(num);
            if(bigRayNumberCount[num] > 0) bigRayNumberCount[num] -= 1;
        }
    }
    return result;
};