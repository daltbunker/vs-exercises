/* 
largest: Function takes ([array]) as parameter and returns the largest Number
Can't use Math.max()

PSEUDO CODE
function Largest(array of nums)
    
    largest num = first element in array

    loop through nums in array
        if current num is >  largest num
            largest num = current num
    return largest num

test case provided: largest([3, 5, 2, 8, 1]) === 8
edge cases:
    repeating numbers in array
    array with non ints
    empty array

-----------------------------------------------------------------
lettersWithStrings: Function that has ([array of characters], character), returns array with elements
containing the character parameter

PSEUDO CODE
function lettersWithStrings(array of characters, character)
    initialize array to hold matched elements
    loop through array of characters
        if character in array[current index] // indexOf, includes
            push current array item into matched element array

    return matched elements array

test case provided: lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!") === ["C%4!", "Hey!"]
edge cases:
    empty array
    no character
    array with non characters

-----------------------------------------------------------------
isDivisible: Function that has (num1, num2) as parameters
returns boolean for whether or not num1 is divisible by num2

PSEUDO CODE
function isDivisible(num1, num2)
    if (num1 % num2 === 0) {
        return true
    }
    return false

test case provides: 
    isDivisible(4, 2) // => true
    isDivisible(9, 3) // => true
    isDivisible(15, 4) // => false

edge cases:
    divisor = 0
    negative numbers

*/  

// largest
function largest(numArray) {
    let largestNum = numArray[0];

    for (let i = 0; i < numArray.length; i++) {
        if (isNaN(numArray[i])) {
            return "Invalid numArray"
        }
        if (numArray[i] > largestNum) {
            largestNum = numArray[i];
            }
        }
        if (!largestNum) {
            return "Array is empty"
        }
        return largestNum;
    }

function testLargest() {
    console.log("\nTesting largest...");
    console.log(largest([3, 5, 2, 8, 1]) === 8);
    console.log(largest([1, 8, 10, 0, 30]) === 30);
    console.log(largest([10, 10, 10, 10]) === 10);
    console.log(largest(["a", 1, 2]) === "Invalid numArray");
    console.log(largest(["a", "b", "c"]) === "Invalid numArray");
    console.log(largest([]) === "Array is empty");
}


// lettersWithStrings
function lettersWithStrings(charArray, char) {
    const matchedArray = [];
    for (let i = 0; i < charArray.length; i ++) {
        if (!isNaN(charArray[i])) {
            return "Invalid charArray"
        }
        if (charArray[i].includes(char)) {
            matchedArray.push(charArray[i]);
        }
    }
    if (matchedArray.length > 0) {
        return matchedArray;
    }
    return "No Matches Found"
}


function testLettersWithStrings() {
    console.log("\nTesting testLetterWithStrings...");
    console.log(JSON.stringify(lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!")) === JSON.stringify(["C%4!","Hey!"]));
    console.log(lettersWithStrings([], "!") === "No Matches Found");
    console.log(lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"]) === "No Matches Found");
    console.log(lettersWithStrings([1, 2, 3], "!") === "Invalid charArray");
    console.log(lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], 2) === "No Matches Found");

}


// isDivisible
function isDivisible(num1, num2) {
    if (num1 % num2 === 0) {
        return true
    }
    return false
}

function testIsDivisible() {
    console.log("\nTesting isDivisible...");
    console.log(isDivisible(4, 2) === true);
    console.log(isDivisible(9, 3) === true);
    console.log(isDivisible(15, 4) === false);
    console.log(isDivisible(10, 0) === false);
    console.log(isDivisible(-10, 5) === true);
    console.log(isDivisible(10, -5) === true);
    console.log(isDivisible(-10, -5) === true);
    console.log(isDivisible(-10, 3) === false);
    console.log(isDivisible(10, -3) === false);
    console.log(isDivisible(-10, -3) === false);
}


function main() {
    testLargest();
    testLettersWithStrings();
    testIsDivisible();
}

main();