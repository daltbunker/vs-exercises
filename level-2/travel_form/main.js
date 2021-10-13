const form = document["traveler-form"];

form.addEventListener("submit", e => {
    e.preventDefault();
    displayAlert();
    form.reset();

})

function displayAlert() {
    const dietaryRestrictions = []
    for (let i = 0; i < form.restrictions.length; i++) {
        if (form.restrictions[i].checked) {
            dietaryRestrictions.push(form.restrictions[i].id);
        }
    }

    alert(`
        First Name: ${form["first-name"].value}
        Last Name: ${form["last-name"].value}
        Age: ${form.age.value}
        Gender: ${form.gender.value}
        Location: ${form.location.value}
        Dietary Restrictions: ${dietaryRestrictions}   
    `);
}
