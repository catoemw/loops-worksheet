var fizzBuzz;

for (var i = 0; i <= 100; i++) {
	fizzBuzz = "";
	if (i % 3 === 0) {
		fizzBuzz += "Fizz";
	} else if (i % 5 === 0) {
		fizzBuzz += "Buzz";
	} else {
		fizzBuzz = i;
	}
	console.log(fizzBuzz);
}

// for (var i = 0; i <= 100; i++) {
// 	if (i % 3 === 0 && i % 5 === 0) {
// 		console.log("FizzBuzz");
// 	} else if (i % 3 === 0) {
// 		console.log("Fizz");
// 	} else if (i % 5 === 0) {
// 		console.log("Buzz");
// 	}
// }