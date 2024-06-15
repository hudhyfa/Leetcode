function minIncrementForUnique(nums: number[]): number {
    let numberOfMovesMade: number = 0;
    let previousNumber: number = -1;
    nums.sort((a, b) => a - b);
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] <= previousNumber) {
            numberOfMovesMade += (previousNumber - nums[i]) + 1;
            nums[i] = previousNumber + 1;
        }
        previousNumber = nums[i];
    }
    return numberOfMovesMade;
};