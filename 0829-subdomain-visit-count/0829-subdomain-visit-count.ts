function subdomainVisits(cpdomains: string[]): string[] {
    let hashMap: { [key: string]: number } = {};
    let result: string[] = [];

    for (let domain of cpdomains) {
        let count: number = 0;
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