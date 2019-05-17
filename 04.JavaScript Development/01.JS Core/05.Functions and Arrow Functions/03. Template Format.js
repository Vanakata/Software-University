function quizAnswers(input) {
	
    let arr = input.toString().split(`,`);
    let question = [];
    let answer = [];

    for (let i = 0; i < arr.length; i++) {

        if (i % 2 != 0) {
            answer.push(arr[i])
        } else {
            question.push(arr[i]);
        }

    }
    console.log(`<?xml version="1.0" encoding="UTF-8"?>`);
    console.log(`<quiz>`);

    for (let i = 0; i < arr.length/2; i++) {
        console.log("<question>");
        console.log(`${question[i]}`);
        console.log("</question>");
        console.log("<answer>");
        console.log(`${answer[i]}`);
        console.log("</answer>");
    }
    console.log(`</quiz>`);

}