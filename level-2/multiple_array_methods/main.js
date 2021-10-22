function sortedOfAge(arr){
    arr.sort((a, b) => {
        let i = 0; 
        a = a.lastName
        b = b.lastName
        while (a.charCodeAt(i) === b.charCodeAt(i)){
            i++;
        }
        return a.charCodeAt(i) - b.charCodeAt(i)
    })
    return arr.reduce((result, person) => {
        if (person.age > 18){
            result.push(`<li>${person.firstName} ${person.lastName} is ${person.age}</li>`);
        }
        return result;
    }, [])
 }
 
 var peopleArray = [
     {
         firstName: "Sarah",
         lastName: "Palin",
         age: 47
        },
        {
            firstName: "Frank",
            lastName: "Zappa",
            age: 12
        },
        {
            firstName: "Rick",
            lastName: "Sanchez",
            age: 78
        },
        {
            firstName: "Morty",
            lastName: "Smith",
            age: 29
        },
        {
            firstName: "Kyle",
            lastName: "Mooney",
            age: 27
        },
        {
            firstName: "Pasha",
            lastName: "Datsyuk",
            age: 13
        },
        {
            firstName: "Lev",
            lastName: "Tolstoy",
            age: 82
        }
    ]

// console.log(sortedOfAge(peopleArray));



