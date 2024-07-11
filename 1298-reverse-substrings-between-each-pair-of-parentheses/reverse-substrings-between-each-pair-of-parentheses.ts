function reverseParentheses(s: string): string {
    while (s.includes("(")) {
        let start: number = s.lastIndexOf("(");
        let end: number = s.indexOf(")", start + 1);

        s =
            s.slice(0, start) +
            s
                .slice(start + 1, end)
                .split("")
                .reverse()
                .join("") +
            s.slice(end + 1);
    }

    return s;
};