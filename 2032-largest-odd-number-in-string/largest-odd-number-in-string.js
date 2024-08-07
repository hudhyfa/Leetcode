/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
    let end = num.length;
    while(end > 0) {
        if(parseInt(num[end - 1]) % 2 !== 0) {
            return num.substring(0,end)
        } 
        end--;
    }
    return "";
};