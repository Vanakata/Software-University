function createBook(selector, titleName, authorName, isbn) {

    return (function () {
        let id = 1;

        let mainContainer = $("<div></div>").attr("id", `book${id}`);
        let title = $("<p></p>").addClass("title").text(titleName).appendTo(mainContainer);
        let author = $("<p></p>").addClass("author").text(authorName).appendTo(mainContainer);
        let isbnNumber = $("<p></p>").addClass("isbn").text(isbn).appendTo(mainContainer);
        let selectBtn = $("<button>Select</button>").appendTo(mainContainer);
        let deSelectBtn = $("<button>Deselect</button>").appendTo(mainContainer);
        mainContainer.appendTo(`${selector}`);
        
        selectBtn.on("click", function () {
            mainContainer.css("border", "2px solid blue");
        })
        deSelectBtn.on("click", function () {
            mainContainer.css("border", "")
        })
        
        id++;
    }());
};