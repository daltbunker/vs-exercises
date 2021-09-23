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
var dropDown = document.getElementById("theme-drop-down");


dropDown.onchange = updateTheme;

function updateTheme() {
    console.log("update")
    var theme = dropDown.value.split('-')
    for (var i = 0; i < messages.length; i++) {
        if (i % 2 === 0) {
            messages[i].style.backgroundColor = theme[0];
        } else {
            messages[i].style.backgroundColor = theme[1];
        }
    }
}

// Gold
var sendForm = document["message"]
var userMessage = sendForm.input.value;
var sendBtn = sendForm["send-button"];
var messagesContainer = document.querySelector(".messages");

sendBtn.addEventListener("click", addMessage)

function addMessage() {
    newMessage = document.createElement("div");
    newMessage.textContent = userMessage;
    newMessage.classList.add("message");
    if (messages.length % 2 == 0) {
        newMessage.classList.add("left");
    } else {
        newMessage.classList.add("right");
    }
    messagesContainer.appendChild(newMessage);
}