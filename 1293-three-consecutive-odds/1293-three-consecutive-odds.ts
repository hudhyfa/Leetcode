function threeConsecutiveOdds(arr: number[]): boolean {
    let oddNumberStreak: number = 0;
    for(let i = 0; i < arr.length; i++) {
        arr[i] % 2 !== 0 ? ++oddNumberStreak : oddNumberStreak = 0;
        if(oddNumberStreak > 2) return true;
    }
    return oddNumberStreak > 2 ? true: false;
};