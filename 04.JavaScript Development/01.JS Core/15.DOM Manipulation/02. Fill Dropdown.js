function addItem() {

    const itemText = document.getElementById("newItemText").value;
    const itemValue = document.getElementById("newItemValue").value;
    
    const elementText = document.createElement("ul");
    elementText.textContent = itemText + " - " + itemValue;
    
   let x = document.getElementById("menu")
   let option = document.createElement("option");
   option.text = elementText.textContent;
   x.add(option);
   document.getElementById("newItemText").value = "";
   document.getElementById("newItemValue").value = "";

}