function arraySort(input, command) {

    if (command === "asc") {

        input.sort((a, b) => a - b)
    } else {
        input.sort((a, b) => b - a);
    }
    return input;

}