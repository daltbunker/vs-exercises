const express = require("express")
const destinationRouter = express.Router()
const {v4: uuid} = require("uuid")

const destinations = [
    {
        country: "panama",
        cost: "low",
        season: "winter",
        _id: uuid()
    },
    {
        country: "france",
        cost: "medium",
        season: "summer",
        _id: uuid()
    },
    {
        country: "egypt",
        cost: "medium",
        season: "summer",
        _id: uuid()
    }
]

destinationRouter.get("/search", (req, res) => {
    const reqSeason = req.query.season
    const matchingDestinations = destinations.filter(destination => destination.season === reqSeason)
    res.send(matchingDestinations)
})

destinationRouter.route("/:destinationId")
    .get((req, res) => {
        const id = req.params.destinationId
        const destination = destinations.find(dest => dest._id === id)
        res.send(destination)
    })

destinationRouter.route("/")
    .get((res, req) => {
        req.send(destinations)
    })
    .post((res, req) => {
        const destination = res.body
        destinations._id = uuid()
        destinations.push(destination)
        req.send("Destination added")
    })

module.exports = destinationRouter
