function replaceWords(dictionary: string[], sentence: string): string {
    const stringRay: string[] = sentence.split(" ");
    for(let i = 0; i < stringRay.length; i++) {
        for(let word of dictionary) {
            const isRoot = isRootValid(word, stringRay[i]);
            if(isRoot) stringRay[i] = word;
        }
    }
    function isRootValid(root: string, word: string): boolean {
        for(let i = 0; i < root.length; i++) {
            if(root[i] !== word[i]) return false;
        }
        return true;
    }
    return stringRay.join(" ");
};