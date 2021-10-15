
let clickCount = sessionStorage.getItem("clickCount");
const clickDisplay = document.querySelector(".click-display");
const timeDisplay = document.querySelector(".time-display");
const restartBtn = document.querySelector("button");

if (clickCount) {
    clickDisplay.textContent = clickCount;
}

document.addEventListener("click", updateClickCount);
restartBtn.addEventListener("click", () => {
    restartBtn.style.display = "none";
    location.reload();
})

function updateClickCount() {
    clickCount++;
    clickDisplay.textContent = clickCount;
    sessionStorage.setItem("clickCount", clickCount);
}

let time = 9;
let timer = setInterval(() => {
    timeDisplay.textContent = time --;
    if (time < 0) {
        document.removeEventListener("click", updateClickCount);
        clearInterval(timer);
        restartBtn.style.display = "block";
    }
}, 1000)
