function trip([x1,y1,x2,y2,x3,y3]) {

    [x1, y1, x2, y2, x3, y3] = [x1, y1, x2, y2, x3, y3].map(Number);

    let A = Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
    let B = Math.sqrt((x2 - x3) * (x2 - x3) + (y2 - y3) * (y2 - y3));
    let C = Math.sqrt((x1 - x3) * (x1 - x3) + (y1 - y3) * (y1 - y3));

  

    if (A + B <= B + C) {
        console.log('1->2->3: ' + Number(A + B));
    }
    else if (A + C < B + C) {
        console.log("2->1->3: " + Number(A + C));
    }
    else {
        console.log("1->3->2: " + Number(B + C));
    }
}