function stringStartsWith(string, checker) {

    let arr = string.split(" ");
    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === checker) {
            return true;
        }
    }
    return false;

}