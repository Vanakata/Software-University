function solve(array) {
	
let command = "";
    for (let i = 0; i < array.length; i++) {
        command = array[i];
        if (command === "Stop"){
            return;
        }
        console.log(command);
    }

}