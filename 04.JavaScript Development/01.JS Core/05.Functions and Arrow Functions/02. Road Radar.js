function solve(input) {
	
    let speed = Number(input[0]);
    let area = input[1];

    
    function speedLimit(speed, area) {
        let speedLimits = { "motorway": 130, "interstate": 90, "city": 50, "residential": 20 };
        
        if (speed <= speedLimits[area]) {
            return false;
        } else {
            let diff = speed - speedLimits[area];
            if (diff <= 20) {
                console.log("speeding")
            } else if (diff <= 40) {
                console.log("excessive speeding")
            } else {
                console.log("reckless driving")
            }
            
        }
        
    }
    speedLimit(speed,area);
}