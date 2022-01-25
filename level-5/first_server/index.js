const express = require("express")
const app = express()



app.get("/", (req, res) => {
    res.send({name: "eric", age: 12, city: "provo"})
})

app.get("/user", (req, res) => {
    res.send("User Endpoint")
})



app.listen(9000, () => {
    console.log("Server is running on Port: 9000")
})