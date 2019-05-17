function solve(array) {
    let firstNumber = array[0];
    let secondNumber = array[1];
    let thirdNumber = array[2];
    let counter = 0;
	
    if (firstNumber < 0) {
        counter++;
    }
    if (secondNumber < 0) {
        counter++;
    }
    if (thirdNumber < 0) {
        counter++;
    }
    if (counter % 2 != 0) {
        console.log("Negative")
    }
    else{
        console.log("Positive")
    }
}