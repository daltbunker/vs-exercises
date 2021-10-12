var fruits = ["banana", "apple", "orange", "watermelon"]
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

fruits.shift();
vegetables.pop();

orangeIndex = fruits.indexOf("orange")
fruits.push(orangeIndex);

vegetablesLength = vegetables.length;
vegetables.push(vegetablesLength);

var food = fruits.concat(vegetables);

food.splice(4, 2);

food = food.reverse();
food = food.join(",");

console.log("Fruits: ", fruits);
console.log("Vegetables: ", vegetables);
console.log("Food: ", food)