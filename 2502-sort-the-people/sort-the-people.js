/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    let namesMap = new Map();
    let result = [];
    for(let i = 0; i < names.length; i++) {
        namesMap.set(heights[i], names[i]);
    }
    let sortedHeights = heights.sort((a,b) => b - a);
    for(let i = 0; i < sortedHeights.length; i++) {
        result.push(namesMap.get(sortedHeights[i]))
    }
    return result;
};