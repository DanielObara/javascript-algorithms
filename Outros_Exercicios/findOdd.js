const findOdd = (A) => {
	let uniqueChars = [...new Set(A)];

	console.log("🚀 ~ file: findOdd.js ~ line 2 ~ findOdd ~ A", uniqueChars)
	// for (let i = 0; i < uniqueChars.length; i++) {
	for (const i of uniqueChars) {
		if (A.filter(e => e === uniqueChars[i]).length % 2 === 1) {
			console.log("🚀 ~ file: findOdd.js ~ line 9 ~ findOdd ~ i", i)
			return uniqueChars[i]
		}
	}
}

let res = findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5])
console.log(res)


function positiveSum(array) {
	var total = 0

	array.forEach(numeros => {
		if (numeros > 0) total += numeros
	})


	return total
}