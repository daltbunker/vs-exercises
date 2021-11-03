const axios = require('axios');

const guitar = {
    title: "guitar",
    completed: true
}

// axios.post("https://api.vschool.io/dalton/todo/", guitar)
//     .then(resp => {
//         console.log(resp.data)
//     })
//     .catch(err => console.log(err))


// axios.delete("https://api.vschool.io/dalton/todo/6179b8feee6f8d3fc3fef3a4")
// .then(resp => console.log(resp.data))
// .catch(err => console.log(err))


axios.get("https://api.vschool.io/dalton/todo/")
    .then(resp => {
        console.log(resp.data)
    })
    .catch(err => console.log(err))