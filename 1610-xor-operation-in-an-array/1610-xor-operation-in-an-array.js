/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
    let xor;i=0;
    while(i<n){
        if(i==0){
            xor = start + (2*i);
        }else{
            xor = xor ^ (start+(2*i))
        }
        i++
    }
    return xor
};