/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let vowelSet = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
    let start = 0, end = s.length - 1;
    let stringRay = s.split('');
    while(start <= end) {
        if(vowelSet.has(stringRay[start]) && vowelSet.has(stringRay[end])) {
            [stringRay[start], stringRay[end]] = [stringRay[end], stringRay[start]];
            start++;
            end--;
        } else {
            if(vowelSet.has(stringRay[start])) {
                --end;
            } else if(vowelSet.has(stringRay[end])) {
                ++start;
            } else {
                ++start;
                --end;
            }
        }
    }
    return stringRay.join('');
};