function criteriaArraySort(input) {

    input.sort(function (a, b) {
        return a.length - b.length || a.localeCompare(b);
    });
   

    for (let i = 0; i < input.length; i++) {
        console.log(input[i]);
    }

}