function cookingByNumbers(input) {
    let number = input[0];
    let arr = input.toString().split(",");

    function getCommands() {
        let commands = [];
        for (let i = 1; i < input.length; i++) {
            commands.push(arr[i]);

        }
        function Manipulations() {

            for (let i = 0; i < commands.length; i++) {

                if (commands[i] === "chop") {
                    number = number / 2;
                    console.log(number);
                } else if (commands[i] === "dice") {
                    number = Math.sqrt(number);
                    console.log(number);
                } else if (commands[i] === "spice") {
                    number += 1;
                    console.log(number);
                } else if (commands[i] === "bake") {
                    number = number * 3;
                    console.log(number);
                }else if (commands[i] === "fillet") {
                    number = number - (number * 0.2);
                    console.log(number);
                }
            }

        }
        Manipulations(number, commands)
    }
    getCommands(arr);

}