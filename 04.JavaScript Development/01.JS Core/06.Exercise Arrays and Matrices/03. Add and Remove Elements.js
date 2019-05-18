function addRemoveNumber(input) {

    let number = [];
    let temp = 1;

    for (let i = 0; i < input.length; i++) {

        let command = input[i];
        if (command === "add") {
            number.push(temp + i);


        } else if (command === "remove") {

            // temp = number.length - 1;
            number.splice(number.length - 1)

        }
    }
    if (number.length === 0) {
        console.log("Empty")
    } else {
        for (let i = 0; i < number.length; i++) {

            console.log(number[i]);
        }

    }

}