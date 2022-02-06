const express = require("express")
const app = express()

app.use(express.json())

app.use("/bounty", require("./bountyRouter"))

app.get("/", (req, res) => {
    res.send("Home")
})

app.use((err, req, res, next) => {
    console.log(err)
    res.send({"error": err.message})
})

app.listen(9000, () => {
    console.log("Server running on port 9000")
})