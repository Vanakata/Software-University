function focus() {
            
            let allSections = document.getElementsByTagName("input");
            Array.from(allSections).forEach(i => {
                i.addEventListener("focus", (event) => {

                    event.target.parentNode.className = "focused";
                });
                i.addEventListener("blur", (event) => {
                    event.target.parentNode.removeAttribute("class");
                });
            });
        }