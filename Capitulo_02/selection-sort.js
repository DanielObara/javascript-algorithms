const meuArrayDesordenado = [5, 3, 6, 2, 10];

/**
 * @param {Array} array 
 * @returns {Array} array ordenado
 * @description Algoritmo de ordenação por seleção onde buscamos primeiro o menor elemento e colocamos na primeira posição, depois o segundo menor elemento e colocamos na segunda posição e assim sucessivamente.
 */
const ordenarPorSelecao = (array) => {
	for (let index = 0; index < array.length; index++) {
		let menor = index;

		for (let index2 = index + 1; index2 < array.length; index2++) {
			if (array[index2] < array[menor]) {
				menor = index2;
			}
		}
		if (index !== menor) {
			let aux = array[index];
			array[index] = array[menor];
			array[menor] = aux;
		}
	}
	return array;
}


//Podemos refatorar a função acima para que ela seja mais legível e fácil de entender.

/**
 * @param {Array} array
 * @returns {Array} array ordenado
 * @description Algoritmo de ordenação por seleção onde buscamos primeiro o menor elemento e colocamos na primeira posição, depois o segundo menor elemento e colocamos na segunda posição e assim sucessivamente.
 */
const ordenarPorSelecaoRefatorado = (array) => {
	let novoArray = [];
	var copyArray = array.slice();

	for (let index = 0; index < array.length; index++) {
		let menor = buscaMenor(copyArray);
		novoArray.push(copyArray.splice(menor, 1)[0]);
	}
	return novoArray;
}

/**
 * @param {Array} array
 * @returns {Number} menor número
 * @description Função que busca o menor elemento de um array.
 */
const buscaMenor = (array) => {
	let menor = 0;

	for (let index = 1; index < array.length; index++) {
		if (array[index] < array[menor]) {
			menor = index;
		}
	}
	return menor;
}



console.time("ordenarPorSelecao");
ordenarPorSelecao(meuArrayDesordenado); // [2, 3, 5, 6, 10]
console.timeEnd("ordenarPorSelecao");

console.time("ordenarPorSelecaoRefatorado");
ordenarPorSelecaoRefatorado(meuArrayDesordenado); // [2, 3, 5, 6, 10]
console.timeEnd("ordenarPorSelecaoRefatorado");