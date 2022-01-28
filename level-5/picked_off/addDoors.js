const express = require("express")
const addDoors = express.Router()

addDoors.use((req, res, next) => {
    req.body = {doors: 4}
    next()
})

module.exports = addDoors
