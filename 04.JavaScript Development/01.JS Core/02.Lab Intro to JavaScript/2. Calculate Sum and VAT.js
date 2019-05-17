function SumAndVATCalc(input) {
	
    const tax = 0.2;
    let sum = 0;
    for (let i = 0; i < input.length; i++) {
    sum +=parseFloat(input[i]);
    
    }
    let vat = sum * tax;
    let total = sum + vat;
    console.log(`sum = ${sum}`);
    console.log(`VAT = ${vat}`);
    console.log(`total = ${total}`);
}