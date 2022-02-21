// Function that takes 2 arrays, and determines whether the second array is a subsequence
// of the first one


function isValidSubsequence(array, sequence) {
    let sequencePosition = 0;
    let arrayPosition = 0;
    while (arrayPosition < array.length && sequencePosition < sequence.length) {
        if(array[arrayPosition] === sequence[sequencePosition]) sequencePosition ++;
        arrayPosition++;
    }
    return sequencePosition === sequence.length;
}