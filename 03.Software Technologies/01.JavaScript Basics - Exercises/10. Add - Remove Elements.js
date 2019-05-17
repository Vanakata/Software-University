function solve(array) {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        let temp = array[i].split(" ");
        let command = temp[0];
        let value = Number(temp[1]);

        if (command === "add") {
            result.push(value);

        }
        else if (command === "remove") {
            result.splice(value, 1);

        }
    }
        for (let i = 0; i<result.length;i++){
            console.log(result[i]);
        }

}