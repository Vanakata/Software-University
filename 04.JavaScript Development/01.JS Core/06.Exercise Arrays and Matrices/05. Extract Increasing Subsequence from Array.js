function printNonDecreasingSubsequence(input) {

    let biggest = 0;
    let arr = [];
    for (let i = 0; i < input.length; i++) {

        if (input[i] >= biggest) {
            biggest = input[i]
            arr.push(biggest);
        }

    }
   
    for (let i = 0; i < arr.length; i++) {

        console.log(arr[i])
    }
}