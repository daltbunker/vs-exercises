const express = require("express")
const app = express()


app.use(express.json())

app.use("/doors", require("./addDoors"))

app.get("/doors", (req, res) => {
    res.send(req.body)
})

app.listen(9000, () => {
    console.log("Local: http://localhost:9000")
})