const express = require("express")
const app = express()

app.use(express.json())
app.use("/todos", require("./routes/todosRoute"))

app.listen(9000, () => {
    console.log("Server running on: PORT 9000")
})