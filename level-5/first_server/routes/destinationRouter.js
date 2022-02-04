const express = require("express")
const destinationRouter = express.Router()
const Destination = require("../models/destinations")

destinationRouter.get("/search/season", (req, res) => {
    Destination.find({season: req.query.season}, (err, destinations) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(destinations)
    })
})

destinationRouter.route("/:destinationId")
    .get((req, res) => { // not updated to mongoDB
        const id = req.params.destinationId
        const destination = destinations.find(dest => dest._id === id)
        res.send(destination)
    })
    .put((req, res, next) => {
        Destination.findOneAndUpdate(
            {_id: req.params.destinationId}, 
            req.body,
            { new: true},
            (err, updatedItem) => {
                if (err) {
                    res.status(500)
                    return next(err)
                }
                return res.status(201).send(updatedItem)
            }
        )
    })
    .delete((req, res, next) => {
        Destination.findOneAndDelete({_id: req.params.destinationId}, (err, deletedItem) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Successfully deleted "${deletedItem.country}" from destinations`)
        })
    })

destinationRouter.route("/")
    .get((req, res, next) => {
        Destination.find((err, destinations) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(destinations)
        })
    })
    .post((req, res, next) => {
        const newDestination = new Destination(req.body)
        newDestination.save((err, savedDestination) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(savedDestination)
        })
    })

module.exports = destinationRouter
