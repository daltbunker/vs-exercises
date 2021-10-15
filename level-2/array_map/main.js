const numArr = [1, 10, 65, 30];

function doubleNumbers(arr){
    return arr.map(num => num * 2);
}

function strigItUp(arr){
    return arr.map(num => `${num}`);
}

function capitalizeNames(arr){
    return arr.map(name => name[0].toUpperCase() + name.slice(1).toLowerCase());
  }

console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); 


const people = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
];

function namesOnly(arr){
    return arr.map(person => person.name);
  }

function makeStrings(arr){
    return arr.map(person => person.age >= 18 ? `${person.name} can go!` : `${person.name} isn't old enough`);
}

function readyToPutInTheDOM(arr){
    return arr.map(person => `<h1>${person.name}</h1><h2>${person.age}</h2>`);
  }



