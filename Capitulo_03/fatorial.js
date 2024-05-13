
/**
 * Factorial function
 * @param {number} n 
 * @returns factorial result of a number
 */
const fat = (n) => {
	if (n === 0) return 1;

	return n * fat(n - 1)
}

console.log("🚀 ~ result:", fat(5))
