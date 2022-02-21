// This algorithm takes in an array of integers, and an integer representing a target sum.
// If any two numbers in the input array sum up to the target sum, the function returns in an array
// If no two numbers add up, the function returns an empty array.

function twoNumberSum(array, targetSum) {
    for (i=0; i < array.length; i++) {
        for (j=1; j < array.length; j++) {
            if (array[i] !== array[j] && array[i] + array[j] === targetSum){
                return [array[i], array[j]];
            }
        }
    }
    return [];
}

  