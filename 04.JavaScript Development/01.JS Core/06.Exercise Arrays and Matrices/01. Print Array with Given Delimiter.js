function printingTextFromArray(input){
	
  let symbol = input[input.length-1];
  input.splice(input.length-1);
  let string = input.join(`${symbol}`);
  return string;
    
}