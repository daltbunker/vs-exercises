const colors = ["red", "blue", "green"]

document.getElementById("add").addEventListener("click", function(){  // Changed from onclick to click
    const subItem = createSubItem()
    document.getElementById("list").appendChild(subItem)
})

function createDropDown(){
    const dropDown = document.createElement("select")
    for (let i = 0; i < colors.length; i++){
        const option = document.createElement("option") 
        option.textContent = colors[i] // changed from innerHTML to textContent
        option.value = colors[i]
        dropDown.append(option)
    }
    dropDown.addEventListener("change", function(e){
        console.log("Dropdown", e)
        e.target.parentElement.style.backgroundColor = e.target.value // changed parent to parentElement and added .style
    })
    return dropDown
}

function createSubItem(){ // removed e as parameter
    const subItem = document.createElement("div")
    var subItemValue = document.getElementById("input")
    subItem.textContent = subItemValue.value // added .value
    const dropDown = createDropDown()
    subItem.appendChild(dropDown)
    dropDown.parentElement.style.backgroundColor = dropDown.value;  // initializes bkg color to red
    subItem.setAttribute("class", "subItem")
    return subItem
}


