const array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
const array2 = [1, 1, 1, 5, 93, 77, 8, 8, "2", "2","3", 2];
const checkArray = [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591];
const checkArray2 = [[1,2], ["2", "3"]];

const cleanArray = (dirtyArray) => {
	// Sepearates the input into numbers and strings
	let numberArray = dirtyArray.filter(number => typeof number === "number");
	let stringArray = dirtyArray.filter(number => typeof number === "string");

	// Create arrays to hold the cleaned data
	let cleanedNumArray = [];
	let cleanedStrArray = [];


	// Creates arrays to hold the unique data
	let uniqueNumArray = [...new Set(numberArray)].sort((a,b) => a-b);
	let uniqueStrArray = [...new Set(stringArray)].sort((a,b) => a-b);

	// Loops through the number array to collect the like numbers into a nested array
	for (item of uniqueNumArray) {

		let hold = numberArray.filter(number => number === item);
		if (hold.length === 1) {
			cleanedNumArray.push(hold[0]);
		} else {
			cleanedNumArray.push(hold);
		}
	}

	// Loops through the string array to collect the like strings into a nested array
	for (item of uniqueStrArray) {
		let hold = stringArray.filter(number => number === item);
		if (hold.length === 1) {
			cleanedStrArray.push(hold[0]);
		} else {
			cleanedStrArray.push(hold);
		}
	}

	// Creates an objects to store the final output
	let cleanedArray = [];
	let count = 0;
	// Checks if there were any numbers cleaned
	if (cleanedNumArray.length > 0) {
		cleanedArray.push(cleanedNumArray);
		count++;
	}
	// Checks if there were any strings cleaned
	if (cleanedStrArray.length > 0) {
		cleanedArray.push(cleanedStrArray);
		count++;
	}

	console.log("count", count);
	if (count < 2) {
		return cleanedArray[0];
	}

	// Returns the array
	return cleanedArray;
	// return cleanedNumArray;
}

let test = cleanArray(array);
test;