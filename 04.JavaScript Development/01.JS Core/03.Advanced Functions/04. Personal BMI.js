function calculatorBMI(name, age, weight, height) {

    let meterHeight = height / 100;
    let bmi = Math.round(weight / Math.pow(meterHeight, 2));
    let status = "";
    let person = {
        name: name,
        personalInfo: {
            age: age,
            weight: weight,
            height: height
        },
        BMI: bmi
    };
    if (bmi < 18.50) {
        status = "underweight";
        person.status = status;
    } else if (bmi < 25) {
        status = "normal";
        person.status = status;
    } else if (bmi < 30) {
        status = "overweight";
        person.status = status;
    } else {
        status = "obese";
    }
    if (status === "obese") {
        person.status = status;
        person.recommendation = "admission required";
    }
    return person;



}