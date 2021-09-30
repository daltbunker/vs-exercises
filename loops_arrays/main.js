// #1

var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]

var count = 0;
for (var i = 0; i < officeItems.length; i++) {
    if (officeItems[i] === "computer") {
        count ++;
    }
}
console.log(count)


// #2
var peopleWhoWantToSeeMadMaxFuryRoad = [
  {
    name: "Mike",
    age: 12,
    gender: "male"
  },{
    name: "Madeline",
    age: 80,
    gender: "female"
  },{
    name: "Cheryl",
    age: 22,
    gender: "female"
  },{
    name: "Sam",
    age: 30,
    gender: "male"
  },{
    name: "Suzy",
    age: 4,
    gender: "female"
  }
]

for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
        console.log("Old enough!")
    } else {
        console.log("Not old enough.")
    }
}

// toggle light
var light = false; 
function toggleLight(numsArray) {
    for (var i = 0; i < numsArray.length; i++) {
        for (var j = 0; j < numsArray[i]; j++) {
            light = !light;
        }
    }
    if (light) {
        console.log("light is on.");
    } else {
        console.log("light is off.")
    }
}

toggleLight([2, 5, 435, 4, 2])
