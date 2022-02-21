// Takes in an array of integers sorted in ascending order, and returns a new array with the squares 
// of the original integers, also in ascending order.

function sortedSquaredArray(array) {
    let outputArray = [];
    for (const number in array) {
        const squaredNumber = Math.pow(array[number], 2);
        outputArray.push(squaredNumber)
    }
    let sortedArray = outputArray.sort((a, b) => a - b);
    return sortedArray;
}