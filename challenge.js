function leftmostNodesSum(array) {
  let sum = 0;
  let index = 0;

  while (index < array.length) {
    if (array[index] !== 0) {
      sum += array[index];
      index = 2 * index + 1;
    } else {
      break;
    }
  }

  return sum;
}

console.log(leftmostNodesSum([2, 7, 5, 2, 6, 0, 9]));
// Output: 11

module.exports = leftmostNodesSum;
