'use strict';

var displayPlayers = function(data) {
    var searchLanguage = document.getElementById("searchLanguage").value;

    var tbody = document.getElementById("tbody");    
    tbody.innerText = "";

    for(var i = 0; i < data.length; i++) {
        if(searchLanguage == "") {
            alert("Please enter Language!");
            return;
        } else {
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
            } else {
                alert("Enter valid Language!");
                return;
            }
        }
    }
};

var loadPlayers = function() {
    var request = new XMLHttpRequest();
    request.open("get", "books.json");
    request.send();
    request.onreadystatechange = function() {
        if(request.readyState == 4 && request.status == 200) {
            var jsonData = JSON.parse(request.responseText);
            displayPlayers(jsonData);
        }
    };
};

var button = document.getElementById("searchButton");
button.addEventListener("click", loadPlayers);