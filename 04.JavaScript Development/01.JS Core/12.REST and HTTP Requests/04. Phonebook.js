function attachEvents() {

    let createButton = $("#btnCreate").on("click", createContact);
    let loadButton = $("#btnLoad").on("click", loadContacts);
    let url = "https://phonebook-vanakata.firebaseio.com/phonebook";

    function createContact() {

        debugger;
        let person = $("#person").val();
        let phone = $("#phone").val();

        let newContact = JSON.stringify({
            person: person,
            phone: phone
        });
        $("#person").val("");
        $("#phone").val("");

        $.post(url + ".json", newContact).then(loadContacts)
    }

    function loadContacts() {
        $.get(url + ".json").then(displayInfo)

        function displayInfo(currentInfo) {
            debugger;
            $("#phonebook").empty()

            for (let contact in currentInfo) {

                let deleteButton = $("<button>[Delete]</button>");
                let createdPerson = currentInfo[contact]["person"];
                let createdPhone = currentInfo[contact]["phone"];
                let li = $(`<li>${createdPerson}: ${createdPhone}</li>`);
                $("#phonebook").append(li);
                li.append(deleteButton).click(deleteContact.bind(this, contact))

            }

        }
    }

    function deleteContact(key) {

        let request = {
            method: "DELETE",
            url: url + "/" + key + ".json"

        }
        $.ajax(request).then(loadContacts)

    }
}