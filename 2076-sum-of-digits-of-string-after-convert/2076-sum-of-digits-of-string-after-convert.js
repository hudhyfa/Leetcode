/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function(s, k) {
    let alphabets = 'abcdefghijklmnopqrstuvwxyz';
    let num = "";

    for(let i = 0; i < s.length; i++) {
        num += alphabets.indexOf(s[i]) + 1;
    }

    if(k === 0) return num;

    while(k >= 1) {
        let res = 0;
        for(let char of num) {
            res += parseInt(char);
        }
        num = res.toString();
        k--;
    }

    return num;
};