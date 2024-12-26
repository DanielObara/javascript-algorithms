/**
 * Examples:
"443355555566604466690277733099966688"  -->  "hello how are you"
"55282"                 -->  "kata"
"22266631339277717777"  -->  "codewars"
"66885551555"           -->  "null"
"833998"                -->  "text"
"000"                   -->  "   "
 */



function phoneWords(stringOfNums) {
	const dict = {
		2: "abc",
		3: "def",
		4: "ghi",
		5: "jkl",
		6: "mno",
		7: "pqrs",
		8: "tuv",
		9: "wxyz",
	}
	if (stringOfNums === "") return "";

	var palavra = '';

	for (let i = 0; i < stringOfNums.length; i++) {
		const numero = stringOfNums[i];
		if (numero === '0') palavra += ' '
		else if (numero !== '1') {
			let n = 1
			while (numero === stringOfNums[i + n]) n++
			n = Math.min(dict[numero].length, n)
			palavra += dict[numero][n - 1]
			i += n - 1
		}
	}

	return palavra
}

const resultado = phoneWords("22266631339277717777")
console.log("🚀 ~ file: PhoneWords.js:46 ~ resultado", resultado)
