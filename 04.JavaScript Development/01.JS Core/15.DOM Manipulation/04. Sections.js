function create(sentences) {
      

      for (let section of sentences) {

        let div = document.createElement("div");
        let paragraph = document.createElement("p");
        paragraph.textContent = section;
        paragraph.style.display = "none";
        div.appendChild(paragraph);
        div.addEventListener("click", function () {

          paragraph.style.display = "block";
        });
        let contentDiv = document.getElementById("content");
        contentDiv.appendChild(div);

      }

    }