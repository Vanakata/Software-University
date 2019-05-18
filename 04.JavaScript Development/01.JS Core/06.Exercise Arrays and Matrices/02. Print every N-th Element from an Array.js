function printNthElements(input) {
	
    let nElement = +input[input.length - 1];
    input.splice(input.length - 1);
    for (let i = 0; i <= input.length - 1; i += nElement) {
        console.log(input[i]);

    }

}