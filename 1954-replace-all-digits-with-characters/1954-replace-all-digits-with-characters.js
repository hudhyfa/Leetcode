/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function(s) {
    for(let i = 1;i<s.length;i+=2){
        if(i%2!==0){
            let C = shift(s[i-1],s[i]);
            s = s.replace(s[i],C)
        }
    }
    function shift(c, x){
        return String.fromCharCode(c.charCodeAt(c[0]) + parseInt(x))
    }
    return s;
};