function kthDistinct(arr: string[], k: number): string {
    let hashMap: {[kthValue: number]: string} = {};
    let kthVal: number = 1;
    for(let char of arr) {
        if(arr.indexOf(char) == arr.lastIndexOf(char)) {
            hashMap[kthVal] = char;
            ++kthVal;
        }
        if(kthVal > k) break;
    }
    if(Object.keys(hashMap).length < k) return "";
    return hashMap[k];
};