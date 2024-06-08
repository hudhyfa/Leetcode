/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let i = 0;rich = 0;
    while(i<accounts.length){
        rich = Math.max(accounts[i].reduce((a,b)=>a+b,0),rich);
        i++
    }
    return rich;
};