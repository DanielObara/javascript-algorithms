class Pokemon {
	#id = 001;
	#name = 'Bulbasaur';

	get id() {
		return this.#id;
	}

	get name() {
		return this.#name;
	}
}

const pokemon = new Pokemon();
console.log(pokemon.name);

pokemon.#id