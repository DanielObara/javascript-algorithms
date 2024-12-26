// // // let person = {
// // //     firstName: 'John',
// // //     address: {
// // //         street: 'North 1st street',
// // //     }
// // // };

// // // const copiedPerson = JSON.parse(JSON.stringify(person));

// // // copiedPerson.firstName = 'Jane'; 

// // // copiedPerson.address.street = 'Amphitheatre Parkway'; 

// // // console.log('copiedPerson',copiedPerson);
// // // console.log('person',person);

// // // const copiedPerson2 = Object.assign({}, person);

// // // copiedPerson2.firstName = 'Test';

// // // copiedPerson2.address.street = 'うずまきナルト';

// // // console.log('copiedPerson2', copiedPerson2);
// // // console.log('person', person);

// // const user = {
// // 	name: 'Daniel',
// // 	address: {
// // 		street: 'North 1st street',
// // 	},
// // };

// // // Using the Deep clone
// // const copiedUser = structuredClone(user)
// // copiedUser.address.street = 'うずまきナルト';

// // // Original user
// // console.log(user.address.street)
// // // OUTPUT: North 1st street

// // // Using the Shallow clone
// // const copiedUser2 = Object.assign({}, user);
// // copiedUser2.address.street = 'Pallet Town';

// // // Original user
// // console.log(user.address.street)
// // // OUTPUT: Pallet Town

// var input = ["sheep", "sheep", "sheep", "wolf", "sheep"]
// // console.log("🚀 ~ file: teste.js:50 ~ input", input)
// // // length = 5
// // // length = 5 - 1 = 4
// // // input[input.length - 1] = input[4] = "sheep"
// // console.log("🚀 ~ file: teste.js:50 ~ input", input[input.length - 1])

// var input2 = ["sheep", "sheep", "wolf"]

// // input.reverse();




// function warnTheSheep(queue) {
// 	if (queue[queue.length - 1] === "wolf") {
// 		return "Pls go away and stop eating my sheep";
// 	} else {
// 		return `Oi! Sheep number ${queue.indexOf("wolf")}! You are about to be eaten by a wolf!`;
// 	}
// }

// let result = warnTheSheep(input)
// console.log("🚀 ~ file: teste.js:65 ~ result", result)


function teste() {
	const configDefault = {
		headers: {
			client_id: 'this.clientId',
			'Content-Type': 'application/x-www-form-urlencoded',
		},
	};
	access_token = 'teste';
	const config = structuredClone(configDefault);
	// const config = {
	// 	...configDefault,
	// 	headers: {
	// 		...configDefault.headers,
	// 		Authorization: 'teste'
	// 	},
	// };
	config.headers.access_token = access_token;
	console.log("🚀 ~ teste ~ config:", config)
}

console.log(teste());