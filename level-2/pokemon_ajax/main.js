
const xhr = new XMLHttpRequest();

xhr.onreadystatechange = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
        const data = JSON.parse(xhr.responseText);
        pokemonArray = data.objects[0].pokemon;
        appendPokemon(pokemonArray);
    }

}

xhr.open("GET", "https://api.vschool.io/pokemon", true);
xhr.send();

function appendPokemon(arr) {
    orderedList = document.querySelector("ol");
    arr.forEach(item => {
        const newPokemon = document.createElement("li");
        newPokemon.textContent = item.name;
        orderedList.appendChild(newPokemon);
    })

}