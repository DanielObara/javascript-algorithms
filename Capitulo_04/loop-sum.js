const exampleArr = [1, 2, 3, 4, 5, 6]

/**
 * sum
 * @param {Array} array 
 * @returns sum of all numbers in the array
 */
const sum = (array) => {
	let result = 0;
	array.forEach(element => {
		result += element
	});

	return result
}

console.log(sum(exampleArr));

/**
 * sumWithReduce
 * @param {Array} array 
 * @returns Sum of all numbers in the array using reduce()
 */
const sumWithReduce = (array) => {
	return array.reduce((prev, curr) => prev + curr);
}

console.log(sumWithReduce(exampleArr));
