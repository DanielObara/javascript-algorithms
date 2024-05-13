const minha_lista = Array.from({ length: 10 }, (_, i) => i + 1);

const insereElemento = (lista, elemento, index) => {
	let tamLista = lista.length;
	while (index <= tamLista + 1) {
		if (index == tamLista) {
			lista[tamLista] = elemento
			return lista;
		};

		lista[tamLista] = lista[tamLista - 1]
		tamLista--;
	}
}
console.log(insereElemento(minha_lista, 2, 5));