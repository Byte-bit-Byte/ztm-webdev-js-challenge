const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Create function that accepts the array and target
const addToTarget = (numArray, target) => {
	// Create an additive inverse array based on the target numer
	const addInv = numArray.map(number => target - number);

	// Create a variable to hold the index in the array during the loop
	let numIndex = 0;

	// Loop through the number array
	for (item of numArray) {
		// Puts the current index being checked into an object
		// Avoids calling the function multiple time uncessarily
		numIndex = addInv.indexOf(item);
		if (numIndex !== -1) {
			// Return array containing the first set of two numbers that sum to target
			return [item, numArray[numIndex]];
		}
	}
}

// Test function
let test = addToTarget(array, 4);
test;