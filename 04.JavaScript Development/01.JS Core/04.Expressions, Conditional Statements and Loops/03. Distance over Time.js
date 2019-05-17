function distanceCalc(input){
	
    let speed1 = parseFloat(input[0]*1000);
    let speed2 = parseFloat(input[1]*1000);
    let timeInSeconds = input[2]/3600;
    let distance1 = speed1 * timeInSeconds;
    let distance2 = speed2 * timeInSeconds;
    let total = Math.abs(distance2-distance1);
    
    console.log(parseFloat(total));

}