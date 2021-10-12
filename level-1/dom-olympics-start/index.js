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
    messagesSize = messages.length
    for (var i = 0; i < messagesSize; i++) {
        messages[0].remove();
    }
}

messages[0].textContent = "Hey what are you up to this weekend?";
messages[1].textContent = "Hitting the slopes with the boyzz";
messages[2].textContent = "Nice! Hows the snow looking?";
messages[3].textContent = "looking fresh, better see you up there";


// Silver
var dropDown = document.getElementById("theme-drop-down");

dropDown.onchange = updateTheme;

function updateTheme() {
    var theme = dropDown.value.split('-');
    for (var i = 0; i < messages.length; i++) {
        if (i % 2 === 0) {
            messages[i].style.backgroundColor = theme[1];
        } else {
            messages[i].style.backgroundColor = theme[0];
        }
    }
}

// Gold
var sendForm = document.message;
var sendBtn = sendForm["send-button"];

var messagesContainer = document.querySelector(".messages");

sendBtn.addEventListener("click", addMessage)

function addMessage() {
    newMessage = document.createElement("div");

    newMessage.textContent = sendForm.input.value;
    newMessage.classList.add("message");
    var theme = dropDown.value.split('-');
    if (messages.length % 2 == 0) {
        newMessage.classList.add("left");
        newMessage.style.backgroundColor = theme[1];
    } else {
        newMessage.classList.add("right");
        newMessage.style.backgroundColor = theme[0];
    }
    messagesContainer.appendChild(newMessage);
}