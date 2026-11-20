var currentPage = 1;
var itemsPerPage = 5;
var selectedCateg = "All";

function displayMods() {
    var selectedCateg = null;
    
    var startIndex = (currentPage - 1) * itemsPerPage;
    var endIndex = startIndex + itemsPerPage;

    var pageItems = selectedCateg.slice(startIndex, endIndex);

    var container = document.getElementById("modCardsUl");
    container.innerHTML = "";

    for (var i = 0; i < pageItems.length; i++) {
        var item = document.create
    }
    
}