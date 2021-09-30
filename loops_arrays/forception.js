var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];
var alphabet = "abcdefghijklmnopqrstuvwxyz";

function combineArrWithString(arr, str) {
    outputArr = [];
    str = str.toUpperCase();
    for (var i = 0; i < arr.length; i++) {
        outputArr.push(arr[i].concat(":"));
        for (var j = 0; j < str.length; j++) {
            outputArr.push(str[j]);
        }
    }
    return outputArr;
}

console.table(combineArrWithString(people, alphabet))