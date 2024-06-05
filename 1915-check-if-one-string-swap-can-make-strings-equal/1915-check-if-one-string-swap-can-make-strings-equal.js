/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
    if(s1.split('').sort().join('') === s2.split('').sort().join('')){
        let count = 0;
        for(let i=0;i<s1.length;i++){
            if(s1[i] !== s2[i]){
                count++;
                if(count>2) return false;
            }
        }
        return true;
    }
    return false;
};