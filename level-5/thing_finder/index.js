const express = require("express")
const app = express()

app.use(express.json())

app.use("/sports", require("./sportRouter"))

app.listen(9000, () => {
    console.log("Server running on port 9000")
})