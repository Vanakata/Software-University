function attachEvents() {

    let submitButton = $("#submit").on("click", getInfo);
    let baseUrl = "https://judgetests.firebaseio.com";

    function getInfo() {

        let locationName = $("#location").val();

        $.get(baseUrl + "/locations.json").then(findLocation);

        function findLocation(locations) {

            let availableLocation;
            let code;

            for (let location of locations) {

                availableLocation = location.name;

                if (locationName === availableLocation) {

                    code = location.code;
                    break;
                }

            }

            Promise.all([

                $.get(`${baseUrl}/forecast/today/${code}.json`),
                $.get(`${baseUrl}/forecast/upcoming/${code}.json`)

            ]).then(displayResult);

            function displayResult([today, upcoming]) {
                let symbol;
                if (today.forecast.condition === "Sunny") {

                    symbol = "&#x2600;"
                } else if (today.forecast.condition === "Partly sunny") {

                    symbol = "&#x26C5;"
                } else if (today.forecast.condition === "Overcast") {

                    symbol = "&#x2601;"
                } else if (today.forecast.condition === "Rain") {
                    symbol = "&#x2614;"
                };

                let todayDiv = $("#current");
                let upcomingDiv = $("#upcoming");
                let htmlContentToday = `<span class=condition>
                <span class=forecast-data>${today.name}</span>
                <span class=forecast-data>${today.forecast.low}&#176;/${today.forecast.high}&#176;</span>
                <span class=forecast-data>${today.forecast.condition}</span>
                </span>`;
                todayDiv.empty();
                todayDiv.append(`<div class=label>Current conditions</div>`).append(`<span class=condition symbol>${symbol}</span>`)
                todayDiv.append(htmlContentToday);

                debugger;
                upcomingDiv.empty();
                upcomingDiv.append(`<div class="label">Three-day forecast</div>`);

                for (let currentForecast of upcoming.forecast) {

                    let htmlContentUpcoming = $(`<span class = upcoming>
                    <span class=forecast-data>${currentForecast.low}&#176;/${currentForecast.high}&#176;</span>
                    <span class=forecast-data>${currentForecast.condition}</span>
                    </span>`).appendTo(upcomingDiv).append(`<span class=condition symbol>${symbol}</span>`);
                }

                $("#forecast").show();

            }

        }
    }

};