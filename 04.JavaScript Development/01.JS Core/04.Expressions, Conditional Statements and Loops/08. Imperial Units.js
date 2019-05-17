function imeprialConvertor(inches) {
	
    let feet = Math.floor(inches / 12);
    let reminder = Math.floor((12 * feet) - (inches));
    if (reminder === 0) {
        console.log(`${feet}'-${reminder}"`)
    }
	
    else {

        console.log(`${feet}'${reminder}"`);
    }
}