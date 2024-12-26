function rowSumOddNumbers(n) {
	// TODO
	const arr = [];

	for (let a = 1; a < n; a++) {
		counter = 0;

		arr.push()
	}

	return [21, 23, 25, 27, 29].reduce((acc, curr) => {
		return acc + curr
	})
}

const montaLinha = (n) => {
	let linha = [];
	let counter = 0;

	for (let i = 1; i < n; i++) {
		counter += i;
		linha.push(counter)
	}

	for (let j = 0; j < n; j++) {
		linha.push(counter + j * 2 + 1);
	}

	return linha;
}
const somaLinha = (n) => {
	let linha = montaLinha(n);
	console.log("🚀 ~ file: Sum of odd numbers.js:33 ~ somaLinha ~ linha.length", linha.length)
	return linha.reduce((acc, curr) => {
		return acc + curr;
	});
}
console.log(somaLinha(42));