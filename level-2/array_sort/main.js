function leastToGreatest(arr) {
    return arr.sort((a, b) => a - b);
  }
  
//   console.log(leastToGreatest([1, 3, 5, 2, 90, 20])); // [1, 2, 3, 5, 20, 90]

  function greatestToLeast(arr) {
    return arr.sort((a, b) => b - a);
  }
  
//   console.log(greatestToLeast([1, 3, 5, 2, 90, 20])); // [90, 20, 5, 3, 2, 1]
  
  function lengthSort(arr) {
    return arr.sort((a, b) => a.length - b.length);
  }
  
//   console.log(lengthSort(["dog", "wolf", "by", "family", "eaten"])); // ["by", "dog", "wolf", "eaten", "family"]
  
  function alphabetical(arr) {
      return (arr.sort()) // sorts uppercase before lowercase
    // return arr.sort((a, b) => { // sorts stricly by alphabetical
    //     let i = 0; 
    //     a = a.toLowerCase();
    //     b = b.toLowerCase();
    //     while (a.charCodeAt(i) === b.charCodeAt(i)){
    //         i++;
    //     }
    //     return a.charCodeAt(i) - b.charCodeAt(i)
    // });
}

// console.log(alphabetical(["dog", "Wolf", "wolfs", "family", "dart", "eaten"])); // ["by", "dog", "eaten", "family", "wolf"]

function byAge(arr){
    return arr.sort((a, b) => {
        return a.age - b.age;
    })
  }
  
  console.log(byAge([
      { name: "Quiet Samurai", age: 22 },
      { name: "Arrogant Ambassador", age: 100 },
      { name: "Misunderstood Observer", age: 2 },
      { name: "Unlucky Swami", age: 77 }
  ]));
  // [ { name: 'Misunderstood Observer', age: 2 },
  // { name: 'Quiet Samurai', age: 22 },
  // { name: 'Unlucky Swami', age: 77 },
  //  { name: 'Arrogant Ambassador', age: 100 } ]