const express = require("express")
const app = express()


app.use(express.json())

app.use("/users", require("./userRouter.js"))
app.use("/destinations", require("./destinationRouter"))

app.listen(9000, () => {
    console.log("Server is running on Port: 9000")
})
