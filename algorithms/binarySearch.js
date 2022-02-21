// Binary search algorithm

function binarySearch(array, target) {
    let rightPointer = array.length;
    let leftPointer = 0;
    let middlePointer = Math.floor((rightPointer + leftPointer) / 2);
    for (i=0; i < array.length; i++){
        if (array[middlePointer] === target) {
            return middlePointer;
        } else if (array[middlePointer] > target) {
            rightPointer = middlePointer - 1;
            middlePointer = Math.floor((rightPointer + leftPointer) / 2);
        } else {
            leftPointer = middlePointer + 1;
            middlePointer = Math.floor((rightPointer + leftPointer) / 2);
        }
    }
    return -1;
}