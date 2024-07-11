function reverseParentheses(s: string): string {
    let stack: string[] = [];
    for(let char of s) {
        if (char == ")") {
            let tempStrRay: string[] = [];
            while(stack[stack.length - 1] !== "(") {
                tempStrRay.push(stack.pop());
                if(stack.length < 1) break;
            }
            stack.pop();
            for(let char of tempStrRay) stack.push(char);
        } else {
            stack.push(char);
        }
    }
    return stack.join('');
};