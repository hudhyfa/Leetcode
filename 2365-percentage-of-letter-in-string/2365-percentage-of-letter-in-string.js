/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function(s, letter) {
    let hashMap = {};
    for(let char of s) {
        hashMap[char] = (hashMap[char] || 0) + 1;
    }
    return hashMap[letter] ? Math.floor((hashMap[letter] / s.length) * 100) : 0;
};