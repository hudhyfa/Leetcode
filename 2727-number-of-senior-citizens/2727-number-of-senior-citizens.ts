/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {
    let seniorCitizens: number = 0;
    for(let detail of details) {
        if(parseInt(detail[11]) > 6) seniorCitizens += 1;
        if(parseInt(detail[11]) == 6 && parseInt(detail[12]) > 0) seniorCitizens += 1;
    }
    return seniorCitizens;
};