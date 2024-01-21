document.getElementById('searchSubmit').addEventListener('click', function(event) {
    event.preventDefault(); 
    var searchValue = document.getElementById('searchInput').value.toLowerCase();

    
    var cards = document.getElementsByClassName('card');

    
    for (var i = 0; i < cards.length; i++) {
        var title = cards[i].getElementsByClassName('card-title')[0].innerText;
        if (title.toLowerCase().indexOf(searchValue) > -1) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }
});