/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
    let hashMap: { [key: number]: number } = {};
    let currentIndex: number = 0;
    for(let num of nums) {
        hashMap[num] = (hashMap[num] || 0) + 1;
    }
    for(let i = 0; i <= 2; i ++){
        while(hashMap[i] > 0) {
            nums[currentIndex] = i;
            hashMap[i] -= 1;
            currentIndex ++;
        }
    }
};