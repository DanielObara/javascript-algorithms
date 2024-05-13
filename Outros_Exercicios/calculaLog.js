const calculaQtdTentativas = (numero) => {
	// Caso base: Se o número for igual a 1, não é necessário mais divisões
	if (numero === 1) {
		return 0;
	}

	// Caso recursivo: Divida o número por 2 e chame a função recursivamente
	return 1 + calculaQtdTentativas(numero / 2);
}

console.log(calculaQtdTentativas(5));

function contarDivisoes(numero) {
	let contador = 0;
	while (numero !== 1) {
		numero = Math.floor(numero / 2);
		contador++;
	}
	return contador;
}

// Exemplo de uso
const numero = 16;
console.log(contarDivisoes(240000)); // Saída: 4
