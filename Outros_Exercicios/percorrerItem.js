
function countPositivesSumNegatives(array) {
	// your code here
	var arrayResultado = [0,0]

	array.forEach(numero => {
		console.log("🚀 ~ file: percorrerItem.js ~ line 7 ~ countPositivesSumNegatives ~ numero", numero)
		if (numero > 0) {
			console.log("🚀 ~ file: percorrerItem.js ~ line 10 ~ countPositivesSumNegatives ~ arrayResultado[0] += 1", arrayResultado[0] += 1)
			return arrayResultado[0] += 1;
		}
	})

	array.forEach(numero => {
		if (numero < 0) {
			return arrayResultado[1] += numero
		}
	})

	return arrayResultado
}

let testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]

countPositivesSumNegatives(testData)