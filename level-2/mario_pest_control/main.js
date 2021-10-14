const form = document['baddies-form'];
const result = document.getElementById("result");

form.addEventListener("submit", e => {
    e.preventDefault();
    result.textContent = sumCoins();
    form.reset();
    addClear();
})

function sumCoins() {
    return form["goomba-price"].value * 5 + form["cheep-cheep-price"].value * 7 + form["bob-omb-price"].value * 11;
}

function addClear() {
    const clearBtn = document.getElementById("clear-btn");
    clearBtn.style.display = "block";
    clearBtn.addEventListener("click", () => {
        result.textContent = 0;
        clearBtn.style.display = "none";
    })

}