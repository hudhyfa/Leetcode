function passThePillow(n: number, time: number): number {
    let pillowPerson: number = 1;
    let stopWatch: number = 0;
    let reverse: boolean = false;
    while(stopWatch < time) {
        if(pillowPerson === 1) reverse = false;
        if(pillowPerson === n) reverse = true;
        reverse ? pillowPerson -= 1 : pillowPerson += 1;
        stopWatch += 1;
    }
    return pillowPerson;
};