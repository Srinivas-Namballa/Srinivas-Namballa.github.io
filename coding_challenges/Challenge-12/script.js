'use strict';

var booksData = [];
var validLanguage = [];
var count = 0;

var validLanguages = function(data) {
    for(var i = 0; i < data.length; i++) {
        var language = data[i].language;
        
        if(validLanguage.indexOf(language) != -1) {
            continue;
        }

        validLanguage.push(language);
    }
};

var displayPlayers = function(data) {
    var searchLanguage = document.getElementById("searchLanguage").value;

    var tbody = document.getElementById("tbody");    
    tbody.innerText = "";

    if(searchLanguage == "") {
        alert("Please enter Language!");
        return;
    }

    validLanguages(data);

    for(var i = 0; i < validLanguage.length; i++) {
        if(searchLanguage.toLowerCase() == validLanguage[i].toLowerCase()) {
            count++;
        }
    }
    
    for(var i = 0; i < data.length; i++) {
        if(count == 0) {
            alert("Enter Valid Language!");
            document.location.reload();
            return;
        }
        
        if(data[i].language.toLowerCase() == searchLanguage.toLowerCase()) {
            var tr = document.createElement("tr");
            tbody.appendChild(tr);

            var author = document.createElement("td");
            tr.appendChild(author);
            author.innerText = data[i].author;

            var country = document.createElement("td");
            tr.appendChild(country);
            country.innerText = data[i].country;

            var imgLink = document.createElement("td");
            tr.appendChild(imgLink);
            imgLink.innerText = data[i].imageLink;

            var link = document.createElement("td");
            tr.appendChild(link);
            link.innerText = data[i].link;

            var pages = document.createElement("td");
            tr.appendChild(pages);
            pages.innerText = data[i].pages;

            var title = document.createElement("td");
            tr.appendChild(title);
            title.innerText = data[i].title;

            var year = document.createElement("td");
            tr.appendChild(year);
            year.innerText = data[i].year;
        }
    }
};

var loadPlayers = function() {
    var request = new XMLHttpRequest();
    request.open("get", "books.json");
    request.send();
    request.onreadystatechange = function() {
        if(request.readyState == 4 && request.status == 200) {
            booksData = JSON.parse(request.responseText);
            displayPlayers(booksData);
        }
    };
};

var button = document.getElementById("searchButton");
button.addEventListener("click", loadPlayers);