// class Pokemon {
// 	_id = 001;
// 	_name = 'Bulbasaur';

// 	get name() {
// 		return this._name;
// 	}
// }

// const pokemon = new Pokemon();
// console.log(pokemon.name); // Bulbasaur

// // Ainda sendo atributos privados, conseguimos acessá-los fora da classe.
// // O que teóricamente não deveria acontecer já que são privados certo?
// console.log(pokemon._id); // 001
// console.log(pokemon._name); // Bulbasaur

// const options = {
// 	ignoreTags: [],
// 	skipTags: [],
// 	aliasTags: () => { },
// };

// var arr = [];

// options.ignoreTags = [...arr]
// console.log("🚀 ~ file: beforeES13-test.js:23 ~ options", options)


// function likeOrDislike(buttons) {
// 	if (buttons.length === 0) {
// 		return 'Nothing';
// 	} else if (buttons.length === 1) {
// 		return buttons[0]
// 	}
// 	let current = 'Nothing'
// 	buttons.forEach(button => {
// 		if (button === current) {
// 			current = 'Nothing'
// 		} else {
// 			current = button
// 		}
// 	});

// 	return current
// }




// arr = ['Like', 'Like', 'Dislike', 'Like', 'Like', 'Like', 'Like', 'Dislike']

// console.log(likeOrDislike(['Like', 'Like', 'Like', 'Like', 'Dislike', 'Dislike']))


var numbers = '45385593107843568'.split('')
numbers.map(number => {
	return number < 5 ? 0 : 1
}).join('')
console.log("🚀 ~ file: beforeES13-test.js:57 ~ res ~ res", res)