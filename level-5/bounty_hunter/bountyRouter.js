const express = require("express")
const {v4: uuid} = require("uuid")

const bountyRouter = express.Router()

const bounties = [
    {
        firstName: "Ron",
        lastName: "Lowe",
        living: false,
        bountyAmount: 200,
        type: "sith",
        _id: uuid()
    },
    {
        firstName: "Yonny",
        lastName: "Simpson",
        living: true,
        bountyAmount: 4000,
        type: "jedi",
        _id: uuid()
    },
]

bountyRouter.route("/")
    .get((req, res) => {
        res.send(bounties)
    })
    .post((req, res) => {
        const newBounty = req.body
        newBounty._id = uuid()
        bounties.push(newBounty)
        res.send(`${newBounty.firstName} ${newBounty.lastName} was succesfully added to bounties.`)
    })

module.exports = bountyRouter