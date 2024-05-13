
/**
 * recursiveSum
 * @param {Array} array 
 * @returns Sum of all numbers in the array using recursion
 */
const recursiveSum = (array) => {
	if (array.length === 0) return 0;
	return array[0] + recursiveSum(array.slice(1))
}

console.log(recursiveSum([1, 2, 3, 4]));