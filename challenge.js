function leftmostNodesSum(array) {
  function helper(array, index) {
    // Base case: if the index is out of range or the node is 0, return 0
    if (index >= array.length || array[index] === 0) {
      return 0;
    }
    
    // Calculate the sum of the current node and its left child
    return array[index] + helper(array, 2 * index + 1);
  }
  
  // Start the recursive traversal from the root (index 0)
  return helper(array, 0);
}

console.log(leftmostNodesSum([2, 7, 5, 2, 6, 0, 9]));
// Output: 11

module.exports = leftmostNodesSum;
