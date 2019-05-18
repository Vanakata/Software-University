function juiceMaker(input) {

    let juiceMenu = {};
    let store = {};

    for (let i = 0; i < input.length; i++) {

        let currentInfo = input[i].split("=>");
        let fruit = currentInfo[0];
        let quantity = +currentInfo[1];

        if (fruit in store) {
            store[fruit] += quantity;
        } else {
            store[fruit] = +quantity;
        }
        if (store[fruit] >= 1000) {
            if (fruit in juiceMenu) {
                juiceMenu[fruit] += +quantity;
            } else {
                juiceMenu[fruit] = store[fruit];
            }
        }
    }
    for (let juice in juiceMenu) {
        console.log(`${juice}=> ${Math.floor(juiceMenu[juice] / 1000)}`);
    }
}