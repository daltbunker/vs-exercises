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
    {
        firstName: "Isaac",
        lastName: "Simpson",
        living: true,
        bountyAmount: 25,
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

bountyRouter.route("/:bountyId")
    .put((req, res) => {
        const id = req.params.bountyId
        const newValues = req.body
        const matchingBounty = bounties.find(bounty => bounty._id === id)
        const updatedBounty = Object.assign(matchingBounty, newValues)
        res.send(updatedBounty)
    })
    .delete((req, res) => {
        const id = req.params.bountyId
        const bountyIndex = bounties.findIndex(bounty => bounty._id === id)
        bounties.splice(bountyIndex, 1)
        res.send("Succesfully deleted!")
    })

module.exports = bountyRouter