
// Green

function collectAnimals(...animals) {
    return animals
}

collectAnimals("dog", "cat", "mouse", "jackolope", "platypus");
// ["dog", "cat", "mouse", "jackolope", "platypus"]

function combineFruit(fruit, sweets, vegetables){
    return {
        fruit,
        sweets,
        vegetables
    }
}

combineFruit(["apple", "pear"],
             ["cake", "pie"],
             ["carrot"])


// {
//     fruit: ["apple", "pear"],
//     sweets: ["cake", "pie"],
//     vegetables: ["carrot"]
// }

function parseSentence({location, duration}){
    return `We're going to have a good time in ${location} for ${duration}`
  }
  
  parseSentence({
    location: "Burly Idaho",
    duration: "2 weeks"
  })

  function returnFirst(items){
    const [firstItem] = items; /*change this line to be es6*/
    return firstItem
}


const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr){
    [firstFav, secondFav, thirdFav] = arr;
    return `My top three favorite activities are ${firstFav}, ${secondFav}, and ${thirdFav}`;
}


// Blue

function combineAnimals(...arrays) {
    return arrays.reduce((arrayAll, array) => {
        arrayAll.push(...array)
        return arrayAll
    }, [])
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

// ["dog", "cat", "mouse", "jackolope", "platypus"]


// Black Diamond

function product(...numbers) {
    return numbers.reduce((acc, number) => acc * number)
  }

  function unshift(array, ...items) {
    return [...items, ...array];
  }


// Double Black Diamond

function populatePeople(names){
    return names.map(name => {
        const [firstName, lastName] = name.split(" ");
        return {
            firstName,
            lastName
        }
    })
}

// console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]

