/**
 * @param {number[]} happiness
 * @param {number} k
 * @return {number}
 */
var maximumHappinessSum = function(happiness, k) {
    let sortedRay = happiness.sort((a, b) => b - a);
    let currentIndex = 0;
    let result = 0;
    while(currentIndex < k) {
        if(currentIndex > 0) {
            if(sortedRay[currentIndex] >= currentIndex) {
                result += sortedRay[currentIndex] - currentIndex
            } else {
                return result;
            }
        } else {
            result += sortedRay[currentIndex];
        }
        currentIndex += 1;
    }
    return result;
};