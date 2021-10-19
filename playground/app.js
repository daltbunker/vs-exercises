const form = document["store-form"];

form.addEventListener("submit", e => {
    e.preventDefault();
    sessionStorage.setItem("fruit", form['session-input'].value);
    sessionStorage.setItem("veggie", form['local-input'].value);
    sessionStorage.setItem("list", JSON.stringify([1, 2, 3, 4]));

    console.log(form['session-input'].value, form['local-input'].value);
})

document.getElementById("get-btn").addEventListener("click", () => {
    console.log("fruit", sessionStorage.getItem("fruit"));
    console.log("veggie", sessionStorage.getItem("veggie"));
    console.log("list", JSON.parse(sessionStorage.getItem("list")));
})