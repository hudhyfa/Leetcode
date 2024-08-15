function lemonadeChange(bills: number[]): boolean {
    let dollarBills: { [bill: number]: number } = {}
    for (let bill of bills) {
        let balance: number = bill - 5;
        if (balance == 5) {
            if (dollarBills[5] > 0) {
                dollarBills[5] -= 1;
            } else {
                return false;
            }
        }
        if (balance == 15) {
            if (dollarBills[10] > 0 && dollarBills[5] > 0) {
                dollarBills[5] -= 1;
                dollarBills[10] -= 1;
            } else if (dollarBills[5] >= 3) {
                dollarBills[5] -= 3;
            } else {
                return false;
            }
        }
        if (!dollarBills[bill]) {
            dollarBills[bill] = 1;
        } else {
            dollarBills[bill] += 1;
        }
    }
    return true;
};