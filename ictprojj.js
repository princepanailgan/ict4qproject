function convert() {
	const inputValue = document.getElementById("inputValue").value;
	const outputUnit = document.getElementById("outputUnit").value;
	let outputValue;

	if (outputUnit === "centimeters") {
		outputValue = inputValue / 10;
	} else if (outputUnit === "meters") {
		outputValue = inputValue / 1000;
	} else if (outputUnit === "kilometers") {
		outputValue = inputValue / 1000000;
	}

	document.getElementById("outputValue").innerHTML = outputValue + " " + outputUnit;
}
