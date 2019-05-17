function solve(array) {

    for (let i = 0; i < array.length; i++) {
        let splitted = array[i].split(" -> ");
        let name = splitted[0];
        let age = splitted[1];
        let grade = splitted[2];
        let output = {
            "Name": name,
            "Age": age,
            "Grade": grade
        };
        for (let key in output){
            console.log(key + ": " + output[key]);
        }
            }
}