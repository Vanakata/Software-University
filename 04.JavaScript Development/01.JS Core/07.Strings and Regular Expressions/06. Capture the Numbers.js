function numberCatcher(input) {

    let regex = /[0-9]+/gm;
    let string = input.toString("");
    let m;
    let arr = [];

    while ((m = regex.exec(string)) !== null) {
       
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }

            m.forEach((match) => {
            arr.push(match);
        });
    }
    console.log(arr.join(" "));
    
}