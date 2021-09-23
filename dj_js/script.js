let colorBox = document.getElementById("color-box")

colorBox.addEventListener("mouseover", function() {
    colorBox.style.backgroundColor = "blue"
})

colorBox.addEventListener("mouseleave", function() {
    colorBox.style.backgroundColor = "black"
})

colorBox.addEventListener("mousedown", function() {
    colorBox.style.backgroundColor = "red"
})

colorBox.addEventListener("mouseup", function() {
    colorBox.style.backgroundColor = "yellow"
})

colorBox.addEventListener("dblclick", function() {
    colorBox.style.backgroundColor = "green"
})

window.addEventListener("scroll", function() {
    console.log("scroll")
    colorBox.style.backgroundColor = "orange"
})

window.addEventListener("keypress", function(e) {
    switch(e.key) {
        case "r":
            colorBox.style.backgroundColor = "red";
            break;
        case "g":
            colorBox.style.backgroundColor = "green";
            break;
        case "b":
            colorBox.style.backgroundColor = "blue";
            break;
        case "y":
            colorBox.style.backgroundColor = "yellow";
            break;
        case "o":
            colorBox.style.backgroundColor = "orange";
            break;
        default:
            break;
    }
})