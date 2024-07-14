function maximumGain(s: string, x: number, y: number): number {
    let biggerScore: number;
    let smallerScore: number;

    if (x > y) {
        biggerScore = scorePerPair("ab", x, s);
        s = rebuildString(s, "ab");
        smallerScore = scorePerPair("ba", y, s);
    } else {
        biggerScore = scorePerPair("ba", y, s);
        s = rebuildString(s, "ba");
        smallerScore = scorePerPair("ab", x, s);
    }

    return biggerScore + smallerScore;

    function scorePerPair(pair: string, pairScore: number, s: string): number {
        let score: number = 0;
        let stack: string[] = [];

        for (let i = 0; i < s.length; i++) {
            if (s[i] === pair[1] && stack.length > 0 && stack[stack.length - 1] === pair[0]) {
                stack.pop();
                score += pairScore;
            } else {
                stack.push(s[i]);
            }
        }

        return score;
    }

    function rebuildString(s: string, pair: string): string {
        let stack: string[] = [];
        for (let i = 0; i < s.length; i++) {
            if (s[i] === pair[1] && stack.length > 0 && stack[stack.length - 1] === pair[0]) {
                stack.pop();
            } else {
                stack.push(s[i]);
            }
        }
        return stack.join('');
    }
}


