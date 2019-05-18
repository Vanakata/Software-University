function solve() {

    let startStationId = "depot";
    let lastStation;
    let departButton = $("#depart");
    let arriveButton = $("#arrive");

    function depart() {

        debugger;

        $.get(`https://judgetests.firebaseio.com/schedule/${startStationId}.json`).then(displayInfo).catch(displayError)

        function displayInfo(currentInfo) {

            let currentStation = currentInfo.name;
            startStationId = currentInfo.next;
            lastStation = currentStation

            $(".info").text(`Next stop ${currentStation}`);
            departButton.prop("disabled", true);
            arriveButton.prop("disabled", false);
        }

    }
    function arrive() {

        $(".info").text(`Arriving at ${lastStation}`);
        departButton.prop("disabled", false);
        arriveButton.prop("disabled", true);



    }
    function displayError(currentInfo) {

        $(".info").text("Error");
        departButton.prop("disabled", true);
        arriveButton.prop("disabled", true);


    }

    return {
        depart,
        arrive
    };
}