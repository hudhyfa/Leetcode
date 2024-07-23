function frequencySort(nums: number[]): number[] {
    let obj: { [key: number]: number } = {};
    let hashMap: { [key: number]: number[] } = {};
    for (let num of nums) {
        obj[num] = (obj[num] || 0) + 1;
    }

    let sortedCount = Object.values(obj).sort((a, b) => a - b);
    for (let count of sortedCount) {
        if (!hashMap[count]) hashMap[count] = [];
        const key: number = parseInt(Object.keys(obj).find(key => obj[key] == count));
        hashMap[count].push(key);
        delete obj[key];
    }

    let frequencyRay: [string, number[]][] = Object.entries(hashMap);
    let result: number[] = [];
    for (let [frequency, numbers] of frequencyRay) {
        if (numbers.length > 1) numbers.sort((a, b) => b - a);
        for (let number of numbers) {
            let count: number = 0;
            while (count !== parseInt(frequency)) {
                result.push(number);
                ++count;
            }
        }
    }

    return result;
};