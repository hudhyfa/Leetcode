/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
    let start = 0; end = start + 1;
    let result = 0;
    while(start < s.length - 1) {
        console.log(s.charCodeAt(start) ,s.charCodeAt(end))
        result += Math.abs(s.charCodeAt(start) - s.charCodeAt(end));
        ++start;
        ++end;
    }
    return result;
};