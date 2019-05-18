function getInfo() {
    
    let stopId = $("#stopId").val();

    let info = $.get(`https://judgetests.firebaseio.com/businfo/${stopId}.json`).then(displayInfo).catch(errorMessage);


    function displayInfo(busStop) {
        $("#stopName").text(busStop.name);

        for (let bus in busStop.buses) {

            $("#buses").append($("<li>").text(`Bus ${bus} arrives in ${busStop["buses"][bus]} minutes`));

        }
    }
    function errorMessage() {
        $("#stopName").text("Error")
    }


}

