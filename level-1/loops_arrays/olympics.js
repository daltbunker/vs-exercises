// Bronze
var bronzeArr = []
var i;
for (i = 0; i < 10; i++) {
    bronzeArr.push(i)
}

for (i = 0; i < 101; i += 2) {
    // console.log(i)
}

const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"];
var evenFruits = []
for (i = 0; i < fruit.length; i += 2) {
    evenFruits.push(fruit[i])
}


// Silver

const peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    },
]

for (i = 0; i < peopleArray.length; i++) {
    // console.log(peopleArray[i].name);
}


names = [];
occupations = [];

for (i = 0; i < peopleArray.length; i++) {
    names.push(peopleArray[i].name);
    occupations.push(peopleArray[i].occupation);
}


evenNames = [];
oddOccupations = [];
for (i = 0; i < peopleArray.length; i++) {
    if (i % 2 === 0) {
        evenNames.push(peopleArray[i].name);
    } else {
        oddOccupations.push(peopleArray[i].occupation);
    }
}

// Gold

var j;
var grid = []
for (i = 0; i < 3; i++) {
    innerArr = [];
    for (j = 0; j < 3; j++) {
        innerArr.push(j) // Part 1: push(0) Part 2: push(i)
    }
    grid.push(innerArr);
}

for (i = 0; i < 3; i++) {
    for (j = 0; j < 3; j++) {
        grid[i][j] = "x"
    }
}

console.table(grid)