/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function (cpdomains) {

    let hashMap = {};
    let result = [];

    for (let domain of cpdomains) {
        let count = 0;
        for (let i = 0; i < domain.length; i++) {
            if (domain[i] == " " || domain[i] == ".") {
                if(count == 0) count = parseInt(domain.slice(0, i + 1));
                hashMap[domain.slice(i + 1)] = (hashMap[domain.slice(i + 1)] || 0) + count;
            }
        }
    }

    for (let [key, value] of Object.entries(hashMap)) {
        result.push(value + " " + key);
    }

    return result;

};