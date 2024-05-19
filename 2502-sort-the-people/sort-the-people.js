/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
    let namesMap = new Map();
    for (let i = 0; i < names.length; i++) {
        namesMap.set(heights[i], names[i]);
    }
    let sortedHeights = heights.sort((a, b) => b - a);
    for (let i = 0; i < sortedHeights.length; i++) {
        names[i] = namesMap.get(sortedHeights[i]);
    }
    return names;
};