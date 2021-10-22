let humanName = "John"
let age = 101

function runForLoop(pets) {
    const petObjects = []
    for (let i = 0; i < pets.length; i++) {
        const pet = { type: pets[i] }
        let petName;
        if (pets[i] === "cat") {
            petName = "fluffy"
        } else {
            petName = "spot"
        }
        console.log("pet petName: ", petName)
        pet.petName = petName
        petObjects.push(pet)
    }
    console.log("man name: ", humanName)
    return petObjects
}


// arrow functions 
// task 1

const carrots = ["bright orange", "ripe", "rotten"]

function mapVegetables(arr) {
    return arr.map((carrot) => {
        return {type: "carrot", name: carrot }
    })
}

// task 2

const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

function filterForFriendly(arr) {
    return arr.filter(({friendly}) => friendly)
}

// task 3

const doMathSum = (a, b) => a + b;

const produceProduct = (a, b) => a * b;

//  task 4

const printString = (firstName="Jane", lastName="Doe", age=100) => {
    return `Hi ${firstName} ${lastName}, how does it feel to be ${age}?`;
}

// task 5

const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
 ];
 
 function filterForDogs(arr) {
     return arr.filter(({type}) => type === "dog")
 }
 
// Template Literals

const greeting = (location, name) => {
    return `Hi ${name}!\nWelcome to ${location}.\nI hope you enjoy your stay. Please ask the president of ${location} if you need anything`;
}

