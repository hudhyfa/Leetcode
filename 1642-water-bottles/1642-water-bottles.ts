function numWaterBottles(numBottles: number, numExchange: number): number {
    let numOfBottlesDrank: number = numBottles;
    while(numBottles >= numExchange) {
        numOfBottlesDrank += Math.floor(numBottles/numExchange);
        numBottles = Math.floor(numBottles/numExchange) + (numBottles%numExchange);
    }
    return numOfBottlesDrank;
};