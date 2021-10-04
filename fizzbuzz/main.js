/* 
Requirements;
-prints numbers 1 - 100
Print Fizz for if multiple of 3 (instead of number)
Print Buzz for if multiple of 5 (instead of number)
Print FizzBuzz for multiple of both 3 and 5 (instead of number)

optional:
Track occurences of fizz, buzz and fizzbuzz. Store results in an object
*/



function fizzBuzz() {
    // For loop that starts at 1 and goes to 100(inclusive)
    let i;

    // optional: declare object
    const fizzBuzzCount = {fizz: 0, buzz: 0, fizzBuzz: 0}

    for (i = 1; i <= 100; i++) {

        // if (num is multple of 5 and 3) print "fizzbuzz"
        if (i % 15 === 0) {
            fizzBuzzCount.fizzBuzz += 1;
            console.log("FizzBuzz");
        }
        // else if (num is multiple of 3) print "fizz"
        else if (i % 3 === 0) {
            fizzBuzzCount.fizz += 1;
            console.log("fizz");
        }
        // else if (num is multiple of 5) print "buzz"
        else if (i % 5 === 0) {
            fizzBuzzCount.buzz += 1;
            console.log("buzz");
        }
        // else print num
        else {
            console.log(i);
        }
    }
    const {fizz, buzz, fizzBuzz} = fizzBuzzCount;
    console.log(`\nFizz: ${fizz}\nBuzz: ${buzz}\nFizzBuzz: ${fizzBuzz}`);
}


fizzBuzz();

// function fizzBuzzTest() {
//     console.log(Math.floor(100/3) === 27 + 6);
//     console.log(Math.floor(100/5) === 14 + 6);
//     console.log(Math.floor(100/15) === 6);
// }

// fizzBuzzTest()