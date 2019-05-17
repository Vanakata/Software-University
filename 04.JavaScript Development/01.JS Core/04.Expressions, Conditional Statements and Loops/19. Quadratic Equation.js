function quatdraticEquationCalc(a, b, c) {
    let x;
    let x1;
    let x2;
    let equation = a * Math.pow(x, 2) + (b * x) - c;
    let d = Math.pow(b, 2) - (4 * a * c);
    if (d > 0) {
        x1 = (-b + Math.sqrt(d)) / (2 * a);
        x2 = (-b - Math.sqrt(d)) / (2 * a);
        console.log(x2);
        console.log(x1);
    }
    else if (d === 0) {
        
        x = -b / (2 * a);
        console.log(x);
    }
    else{
        console.log("No");
    }
}