function distance3dCalc(input) {
	
    let x = input[0];
    let y = input[1];
    let z = input[2];
    let x1 = input[3];
    let y1 = input[4];
    let z1 = input[5];
    let distance = Math.sqrt(Math.pow(x1 - x, 2) + Math.pow(y1 - y, 2) + (z1 - z)*(z1 - z));
    console.log(distance);
}