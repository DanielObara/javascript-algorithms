const minha_lista = Array.from({ length: 1000 }, (_, i) => i + 1);

// Pesquisa simples
/**
 * Percorre cada item da lista e faz a comparaçao.
 */
const pesquisaNumero = (lista, numero) => {
	for (index = 0; index < lista.length; index++) {
		const element = lista[index];
		if (element === numero) {
			return element
		}
	}
}
console.time("Busca Simples")
pesquisaNumero(minha_lista, 879)
console.timeEnd("Busca Simples");

// Pesquisa Binária
/**
 * Inicia a busca cortando a quantidade de elementos pela metade e realiza a comparação e assim sucessivamente.
 */
const pesquisaBinaria = (lista, numero) => {
	let inicio = 0;
	let fim = lista.length

	while (inicio <= fim) {
		let meio = Math.floor((inicio + fim) / 2);
		if (lista[meio] === numero) {
			return meio
		}

		if (lista[meio] > numero) {
			fim = meio - 1
		} else {
			inicio = meio + 1
		}
	}
}

console.time("pesquisaBinaria");
pesquisaBinaria(minha_lista, 879)
console.timeEnd("pesquisaBinaria");