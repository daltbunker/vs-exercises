const itemList = document.getElementById("list");
const form = document.addItem;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    addListItem(form.title.value);
})


function addListItem(formValue) {
    const newListItem = document.createElement("li");
    const newTitle = document.createElement("div");
    const newEditBtn = document.createElement("button");
    const newDeleteBtn = document.createElement("button");
    const newInput = document.createElement("input")

    newTitle.textContent = formValue;
    form.title.value = "";
    newEditBtn.textContent = "edit";
    newEditBtn.classList.add("edit")
    newDeleteBtn.textContent = "X";
    newDeleteBtn.classList.add("delete")
    newInput.style.display = "none";
    
    newEditBtn.addEventListener("click", e => editListItem(e));
    newDeleteBtn.addEventListener("click", e => {
        e.target.parentElement.remove();
    });

    newListItem.appendChild(newTitle);
    newListItem.appendChild(newInput);
    newListItem.appendChild(newEditBtn);
    newListItem.appendChild(newDeleteBtn);
    newListItem.appendChild(newDeleteBtn);

    itemList.prepend(newListItem);
}

function editListItem(e) {
    input = e.target.previousSibling;
    if (e.target.textContent === "edit") {
        input.style.display = "inline";
        input.value = input.previousSibling.textContent;
        e.target.textContent = "save";
    } else {
        input.previousSibling.textContent = input.value;
        input.value = "";
        input.style.display = "none";
        e.target.textContent = "edit";
    }
}


addListItem("bananas")
addListItem("bread")
addListItem("eggs")
addListItem("dish soap")