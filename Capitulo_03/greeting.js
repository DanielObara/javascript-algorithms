
const sauda = (nome) => {
	console.log(`Olá ${nome}!`);
	sauda2(nome);

	console.log("Preparando para dizer tchau");

	tchau()
}

const sauda2 = (nome) => {
	console.log(`Como vai ${nome}?`);
}

const tchau = () => {
	console.log("ok, tchau!");
}

sauda('Daniel')