function minOperations(logs: string[]): number {
    let stack: string[] = [];
    for(let log of logs) {
        if(log == "../") stack.pop();
        if(!log.startsWith(".")) stack.push(log);
    }
    return stack.length;
};