
/**
 * Countdown function
 * @param {number} n
 * @description Print each number up to 0
 */
const countdown = (n) => {
	console.log(n);
	if (n <= 0) return

	countdown(n - 1)
}

countdown(10)