/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function(words1, words2) {
    let obj1 = {};
    let obj2 = {};
    let result = 0;
    for(let str of words1) {
        obj1[str] = (obj1[str] || 0) + 1;
    }
    for(let str of words2) {
        obj2[str] = (obj2[str] || 0) + 1;
    }
    for(let str of words2) {
        if(obj1[str] && obj2[str]) {
            if(obj1[str] === 1 && obj2[str] === 1) ++result;
        }
    }
    return result;
};