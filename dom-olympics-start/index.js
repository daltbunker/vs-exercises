// Qualifier
var header = document.getElementById("header");
var header1 = document.createElement("h1");
var header4 = document.createElement("h4");
var nameSpan = document.createElement("span");

header1.textContent = "JavaScript Made This!!";
nameSpan.textContent = "Dalton Bunker";
header4.textContent = " wrote the JavaScript";

header.classList.add("header");
nameSpan.classList.add("name");


header.appendChild(header1);
header.appendChild(header4);
header4.prepend(nameSpan);

// Bronze
var messages = document.getElementsByClassName("message");
var clearBtn = document.getElementById("clear-button");

clearBtn.addEventListener("click", clearMessages);

function clearMessages() {
    for (var i = 0; i < messages.length; i++) {
        messages[i].textContent = "";
    }
}

messages[0].textContent = "Hey What's up";
messages[1].textContent = "Nothin just chillin with the boyzz";
messages[2].textContent = "You coming to rage with the south valley later?";
messages[3].textContent = "Ya dude i'll be there";


// Silver
