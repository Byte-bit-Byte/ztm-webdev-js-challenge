const hexToRGB = (color) => {
	// Error checking for passing a non string
	// Realised this was a waste of time since JS does this for me unintentionally
	// I've been coding in C for a month give me a break
	if (typeof color !== "string") {
		console.log("Enter a string as your color")
		return color;
	}

	// Get rid of excess whitespace
	color = color.trimStart().trimEnd();


	// Check type of input and returns corresponding output
	if (color[0] === '#') {
		// Checks length of hex color to make sure a proper input was entered
		if (color.length === 7) {
			// Create red color object and convert to Hex
			let red = color[1] + color[2];
			red = parseInt(red,16);

			// Create green color object and convert to Hex
			let green = color[3] + color[4];
			green = parseInt(green,16);

			// Create blue color object and convert to Hex
			let blue = color[5] + color[6];
			blue = parseInt(blue,16);

			// Return result
			return `rgb(${red},${green},${blue})`;
		} else if (color.length === 4) {
			// Create red color object and convert to Hex
			let red = color[1] + color[1];
			red = parseInt(red,16);

			// Create green color object and convert to Hex
			let green = color[2] + color[2];
			green = parseInt(green,16);

			// Create blue color object and convert to Hex
			let blue = color[3] + color[3];
			blue = parseInt(blue,16);

			// Return result
			return `rgb(${red},${green},${blue})`;

		} else {
			// More error checking habits from C
			console.log("Invalid length of HEX color!");
			return color;
		}

	} else if (color[0].toLowerCase() === 'r' && color[1].toLowerCase() === 'g' && color[2].toLowerCase() === 'b' && color[3] === '(') {
		// Create item to store color values as needed
		let item = '';

		// Create finalHex to store the final hex
		let finalHex = '#';

		// Iterate with honestly too many nested conditionals to grab the values of the colors
		for (let i = 4; i < color.length; i++) {
			// Checks for the end of a color value
			if (color[i] === ',' || color[i] === ')' ) {
				// More error checking 
				if ((item - 0) > 255 || (item - 0) < 0) {
					console.log("Invalid rgb value!");
					return color;

				} else { // converts decimal rgb value t hex and adds to finalHex
					finalHex += (item - 0).toString(16);
					item = '';
				}
				
			} else { 
				item += color[i];
			}
		}
		return finalHex;

	} else { // More error checking
		console.log("There is something wrong with the color you entered try either #xxxxxx for hex or rgb(num, num, num) for RGB");
		return color;
	}
}

let test = hexToRGB('#ffffff');
test;