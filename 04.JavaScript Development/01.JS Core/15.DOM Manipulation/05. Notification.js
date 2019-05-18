 function notify(message) {

            let element = document.getElementById("notification");
            element.textContent = message;
            element.style.display = "block";

            setTimeout((message) => {
                element.style.display = "none";
            }, 2000);

        }