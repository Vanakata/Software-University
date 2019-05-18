function addItem() {

        let input = document.getElementById("newItemText").value;
        let element = document.createElement("li");
        element.appendChild(document.createTextNode(input));
        document.getElementById("items").appendChild(element);
        document.getElementById("newItemText").value = "";
 }