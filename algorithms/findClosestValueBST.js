// Function takes in a binary search tree, and a target integer. Returns the closest value to the
// target value, contained in the BST.

function findClosestValueInBst(tree, target) {
    return findClosestValueInBstHelper(tree, target, tree.value);
}

function findClosestValueInBstHelper(tree, target, closest) {
    if (tree === null) return closest;
    if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
        closest = tree.value;
    }
    if (target < tree.value) {
        return findClosestValueInBstHelper(tree.left, target, closest);
    } else if (target > tree.value) {
        return closestValueInBstHelper(tree.right, target, closest);
    } else {
        return closest;
    }
}

// This is the class of the input tree.
class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}