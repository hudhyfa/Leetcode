function averageWaitingTime(customers: number[][]): number {
    let avgW8nTym: number = 0;
    let totalTimeTaken: number | null;
    for (let customer of customers) {
        if (!totalTimeTaken || customer[0] > totalTimeTaken) {
            totalTimeTaken = customer[0] + customer[1];
        } else {
            totalTimeTaken += customer[1];
        }
        avgW8nTym += totalTimeTaken - customer[0];
    }
    return avgW8nTym / customers.length;
};