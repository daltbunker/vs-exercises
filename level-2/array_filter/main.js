const nums = [1, 32, 3, 100, 54, 12]
const words = ["dog", "wolf", "by", "family", "eaten", "camping"]
const persons = [
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
];

function fiveAndGreaterOnly(arr) {
    return arr.filter(num => num >= 5)
}

function evensOnly(arr) {
    return arr.filter(num => num % 2 === 0)
}

function fiveCharactersOrFewerOnly(arr) {
    return arr.filter(word => word.length <= 5)
}

function peopleWhoBelongToTheIlluminati(arr){
    return arr.filter(person => person.member)
}

function ofAge(arr){
    return arr.filter(person => person.age >= 18)
  }

