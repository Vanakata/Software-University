function argumentInfo() {

    let info = {};
    let sortedCounter = [];
    for (let i = 0; i < arguments.length; i++) {
        let text = "";
        let typeOfArgument = typeof arguments[i];
        if (typeof arguments[i] === "object") {

            text = JSON.stringify(arguments[i]);
        }else{
            text = arguments[i];
        }

        if (!info.hasOwnProperty(typeOfArgument)) {

            info[typeOfArgument] = 1;

        } else {
            info[typeOfArgument] += 1
        }
        console.log(typeOfArgument + ": " + text);
    }
    for (const item in info) {
        sortedCounter.push([item, info[item]]);
    }
    sortedCounter.sort((a, b) => b[1] - a[1]);
    for (const item of sortedCounter) {

        console.log(item[0] + " = " + item[1]);
    }

}