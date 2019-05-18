function employeeData(input) {

    let html = "<table>\n"
    for (let i = 0; i < input.length; i++) {

        let text = input[i];
        var object = JSON.parse(text);
        
        html+= "	<tr>\n		<td>" + object.name + "</td>\n" + "		<td>" + object.position + "</td>\n" + "		<td>" + object.salary + "</td>\n	<tr>\n"
        
    }
    html+="</table>";
    console.log(html);

}