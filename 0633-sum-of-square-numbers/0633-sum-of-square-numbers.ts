function judgeSquareSum(c: number): boolean {
    let sqrt: number = Math.sqrt(c);
    let Difference: Set<number> = new Set();
    let maxNum: number = Math.floor(sqrt);
    let minNum: number = 0;
    while(minNum <= maxNum) {
        Difference.add(c - (maxNum*maxNum));
        Difference.add(c - (minNum*minNum));
        if(Difference.has(maxNum*maxNum) || Difference.has(minNum*minNum)) return true;
        maxNum--;
        minNum++;
    }
    return false;
};