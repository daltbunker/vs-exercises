const express = require("express")
const morgan = require("morgan")
const mongoose = require("mongoose")
const app = express()

app.use(express.json())
app.use(morgan("dev"))

mongoose.connect("mongodb://localhost:27017/guitar_db", () => console.log("Connected to the DB"))

app.use("/guitars", require("./routes/inventory"))

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({"error": err.message})
})

app.listen(9000, () => {
    console.log("server running on port 9000")
})