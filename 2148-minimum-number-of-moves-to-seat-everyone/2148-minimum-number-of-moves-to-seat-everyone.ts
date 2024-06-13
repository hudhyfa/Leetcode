function minMovesToSeat(seats: number[], students: number[]): number {
    let countOfMovesMade: number = 0;
    seats.sort((a, b) => a - b);
    students.sort((a, b) => b - a);
    for(let i = 0, j = seats.length - 1; i < students.length; i++, j--) {
        countOfMovesMade += Math.abs(seats[j] - students[i]);
    }
    return countOfMovesMade;
};