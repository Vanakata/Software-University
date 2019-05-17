function solve(array) {
	
    let firstNumber = Number(array[0]);
    let secondNumber = Number(array[1]);
    let sum = 0;
	
    if (secondNumber>=firstNumber){
        sum = firstNumber*secondNumber
      console.log(sum)
    }
    else {
        sum = firstNumber/secondNumber;
        console.log(sum);
    }
}