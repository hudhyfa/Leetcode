/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    let numStr = num.toString();
    for(let strIdx in numStr) {
        if(numStr[strIdx] == 6) {
            numStr = numStr.replace(numStr[strIdx], "9");
            break;
        }
    }
    return Number(numStr);
};