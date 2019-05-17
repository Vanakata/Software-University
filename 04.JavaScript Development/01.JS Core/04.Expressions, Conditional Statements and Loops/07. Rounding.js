function roundingProgram(input) {
	
    let num = input[0];
    let roundingPlace = input[1];
    let roundedNumber = "";
    if (roundingPlace > 15) {
        roundingPlace = 15;
    }
	
    roundedNumber = num.toFixed(roundingPlace)
    console.log(parseFloat(roundedNumber));
}