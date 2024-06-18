/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    const newMap = tasks.reduce((map, obj)=> {
    map[obj] = map[obj] + 1 || 1 ;
    return map;
    }, {});
        
    const array=Object.values(newMap)
    const maximumRows = Math.max(...array)
    const lastRowLength = array.filter(x => x === maximumRows).length
    return Math.max(tasks.length, (maximumRows - 1) * (n + 1) + lastRowLength) 
};