/**
 * count
 * @param {Array} arr 
 * @returns Return an amount of number in the array
 */
const count = (arr) => {
	if (arr.length === 0) return 0;
	return 1 + count(arr.slice(1))
}

console.log(count([1, 2, 3, 4, 5, 6, 7, 8, 9]));