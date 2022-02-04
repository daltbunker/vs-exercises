const morgan = require("morgan")
const express = require("express")
const mongoose = require("mongoose")
const app = express()

// middleware
app.use(express.json())
app.use(morgan("dev"))


// connect to DB
mongoose.connect("mongodb://localhost:27017/traveldb", () => console.log("Connected to the DB"))

//routes
app.use("/destinations", require("./routes/destinationRouter"))

// error handler
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({error: err.message})
})

app.listen(9000, () => {
    console.log("Server is running on Port: 9000")
})
