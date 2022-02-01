const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const addToTarget = (numArray, target) => {
	const addInv = numArray.map(number => target - number);
	let numIndex = 0;

	for (item of numArray) {
		if (addInv.indexOf(item) !== -1) {
			numIndex = addInv.indexOf(item);
			return [item, numArray[numIndex]];
		}
	}
}

let test = addToTarget(array, 4);
test;