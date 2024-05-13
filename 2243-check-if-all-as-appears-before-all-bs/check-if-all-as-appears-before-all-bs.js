/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function(s) {
    if(s.indexOf("a") < 0 || s.indexOf("b") < 0) return true;
    if(s.indexOf("a") < s.indexOf("b") && s.lastIndexOf("a") < s.indexOf("b")) return true;
    return false;
};