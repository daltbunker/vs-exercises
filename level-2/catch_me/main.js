function sum(x, y){
    if (typeof x === "number" && typeof y == "number") {
        return x + y
    }
    throw TypeError("Must be of type 'number'")
}


// try {
//     sum("1", 2)
// } catch(err) {
//     console.log(err)
// } finally {
//     console.log("try statement executed")
// }


// only throws one error if username and password are incorrect
var user = {username: "sam", password: "123abc"}
function login(username, password){
    if (username !== user.username){
        throw Error("Invalid username")
    }
    if (password !== user.password){
        throw Error("Invalid password")
    }
    console.log("login successful!")
}

try {
    login("bob", "123abc")
} catch(err){
    console.log(err)
} finally {
    console.log("try statement(1) executed")
}

try {
    login("sam", "123abc")
} catch(err){
    console.log(err)
} finally {
    console.log("try statement(2) executed")
}
