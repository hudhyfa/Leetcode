/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    let i = left;arr = [];
    for(i=left;i<=right;i++){
        let n = i;
        let flag = true;
        while(n>0){
            let x = n%10;
            if(i%x!==0){
                flag = false;
                break;
            }
            n = Math.floor(n/10);
        }
        if(flag) arr.push(i);
    }
    return arr;
};