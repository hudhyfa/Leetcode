/**
 * @param {number[]} chalk
 * @param {number} k
 * @return {number}
 */
var chalkReplacer = function(chalk, k) {
    let index = 0;
    while(index < chalk.length) {
        if(k < chalk[index]) return index;
        k -= chalk[index];
        index == chalk.length - 1 ? index = 0: ++index;
    }
};