
function fizzBuzz(n) {
	// Write your code here
	let i = 1;
	while (i <= n) {
		if (i % 3 == 0 && i % 5 == 0) {
			process.stdout.write("FizzBuzz" + '\n')
		} else if (i % 5 == 0) {
			process.stdout.write("Buzz" + '\n')
		} else if (i % 3 == 0) {
			process.stdout.write("Fizz" + '\n')
		} else {
			process.stdout.write(i + '\n')
		}
		i++;
	}
}

console.log(fizzBuzz(15))