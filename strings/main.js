function capitalizePlusLowercase(str) {
    return str.toUpperCase().concat(str.toLowerCase());
}

// console.log(capitalizePlusLowercase("Name"));

function findMiddleIndex(str) {
    return Math.floor(str.length / 2);
}

// console.log(findMiddleIndex("Hello World"));

function returnFirstHalf(str) {
    const index = findMiddleIndex(str);
    return str.slice(0, index);
}

// console.log(returnFirstHalf("Hello World"));

function capitalizeAndLowercase(str) {
    const index = findMiddleIndex(str);
    var firstHalf = str.slice(0, index).toUpperCase();
    var secondHalf = str.slice(index).toLowerCase();
    return firstHalf.concat(secondHalf);
}

// console.log(capitalizeAndLowercase("Hello World"));

function capitalize(str) {
    strArr = str.split(" ");
    for (var i = 0; i < strArr.length; i++) {
        wordArr = strArr[i].split("");
        wordArr[0] = wordArr[0].toUpperCase();
        strArr[i] = wordArr.join("");
    }
    return strArr.join(" ");
}

console.log(capitalize("hey friends! practice practice practice!"));
