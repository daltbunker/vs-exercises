const itemList = document.getElementById("list");
const deleteBtns = document.getElementsByClassName("")
const form = document.addItem;

form.addEventListener("submit", (e) => {
    e.preventDefault()
    addListItem()
})


function addListItem() {
    const newListItem = document.createElement("li");
    const newTitle = document.createElement("div");
    const newEditBtn = document.createElement("button");
    const newDeleteBtn = document.createElement("button");

    newTitle.textContent = form.title.value
    form.title.value = ""
    newEditBtn.textContent = "edit";
    newEditBtn.classList.add("edit");
    newDeleteBtn.textContent = "X";
    newDeleteBtn.classList.add("delete");

    newDeleteBtn.addEventListener("click", e => {
        e.target.parentElement.remove()
    });

    newListItem.appendChild(newTitle);
    newListItem.appendChild(newEditBtn);
    newListItem.appendChild(newDeleteBtn);

    itemList.prepend(newListItem);
}
