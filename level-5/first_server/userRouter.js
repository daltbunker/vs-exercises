const express = require("express")
const userRouter = express.Router()
const {v4: uuid} = require("uuid")

const users = [
    {name: "eric", age: 12, _id: uuid()},
    {name: "jon", age: 14, _id: uuid()},
    {name: "rick", age: 23, _id: uuid()},
    {name: "susan", age: 13, _id: uuid()},
    {name: "tony", age: 20, _id: uuid()},
]

userRouter.route("/:userId")
    .get((req, res) => {
        const id = req.params.userId
        const user = users.find(item => item._id === id)
        res.send(user)
    })
    .put((req, res) => {
        const id = req.params.userId
        const userIndex = users.findIndex(user => user._id === id)
        const updatedUser = Object.assign(users[userIndex], req.body)
        res.send(updatedUser)
    })
    .delete((req, res) => {
        const id = req.params.userId
        const userIndex = users.findIndex(user => user._id === id)
        users.splice(userIndex, 1)
        res.send("User deleted!")
    })
    
userRouter.route("/")
    .get((req, res) => {
        res.send(users)
    })
    .post((req, res) => {
        const newUser = req.body
        newUser._id = uuid()
        users.push(newUser)
        res.send("Succesfully added " + newUser.name + " to database")
    })

module.exports = userRouter