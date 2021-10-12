const addForm = document["add-form"];
const subForm = document["sub-form"];
const mulForm = document["mul-form"];

addForm.addEventListener("submit", e => {
    e.preventDefault();
    const sum = parseInt(addForm.num1.value) + parseInt(addForm.num2.value);
    if (isNaN(sum)) {
        alert("Invalid Input");
        return;
    }
    displayResult(sum);
    clearForm();
    
})

subForm.addEventListener("submit", e => {
    e.preventDefault();
    const diff = parseInt(subForm.num1.value) - parseInt(subForm.num2.value);
    if (isNaN(diff)) {
        alert("Invalid Input");   
        return; 
    }
    displayResult(diff);
    clearForm();
})

mulForm.addEventListener("submit", e => {
    e.preventDefault();
    const product = parseInt(mulForm.num1.value) * parseInt(mulForm.num2.value);
    if (isNaN(product)) {
        alert("Invalid Input");
        return;
    }
    displayResult(product);
    clearForm();
})

function displayResult(result) {
    const resultDiv = document.getElementsByClassName("result")[0]
    resultDiv.textContent = "Result: " + result;
    resultDiv.style.display = "inline";
}

function clearForm() {
    addForm.num1.value = "";
    addForm.num2.value = "";
    subForm.num1.value = "";
    subForm.num2.value = "";
    mulForm.num1.value = "";
    mulForm.num2.value = "";
}