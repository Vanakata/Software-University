function diagonalAttack(input) {

    let matrix = input.map(row => row
        .split(" ")
        .map(n => +n));

    let mainDiagonal = 0;
    let secondaryDiagonal = 0;

    for (let row = 0; row < matrix.length; row++) {

        mainDiagonal += matrix[row][row];
        secondaryDiagonal += matrix[row][matrix.length - row - 1]
    }

    if (mainDiagonal === secondaryDiagonal) {
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[row].length; col++) {

                if (col !== row && col !== matrix[row].length - 1 - row) {
                    matrix[row][col] = mainDiagonal;

                }
            }

        }

    }
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i].join(" "));
    }

}