/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    const allowedSet = new Set(allowed.split(''));
    let count = 0;
    for(let word of words) {
        let consistent = true;
        for(let char of word) {
            if(!allowedSet.has(char)) {
                consistent = false;
                break;
            }
        }
        consistent ? count += 1 : count;
    }
    return count;
};