// Array of positive integers representing the value of coins in my possession. Function will
// return the minimum amount of change that I can't create.

function nonConstructibleChange(coins) {
    coins.sort((a, b) => a - b);
    let currentPossibleChange = 0;
    for (const coin of coins) {
        if (coin > currentPossibleChange + 1){
            return currentPossibleChange + 1;
        }
        currentPossibleChange += coin;
    }
    return currentPossibleChange + 1;
}