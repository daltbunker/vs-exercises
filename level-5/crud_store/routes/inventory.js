const express = require("express")
const InventoryModel = require("../models/inventory")
const inventory = express.Router()

inventory.route("/")
    .get((req, res, next) => {
        InventoryModel.find((err, guitars) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            res.status(200).send(guitars)
        })
    })
    .post((req, res, next) => {
        const newGuitar = new InventoryModel(req.body)
        newGuitar.save((err, savedGuitar) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(savedGuitar)
        })
    })

inventory.route("/:inventoryId")
    .get((req, res, next) => {
        InventoryModel.find(
            { _id: req.params.inventoryId },
            (err, guitar) => {
                if (err) {
                    res.status(500)
                    return next(err)
                }
                return res.status(200).send(guitar)
            }
        )
    })
    .put((req, res, next) => {
        InventoryModel.findOneAndUpdate(
            { _id: req.params.inventoryId },
            req.body,
            { new: true },
            (err, updatedGuitar) => {
                if (err) {
                    res.status(500)
                    return next(err)
                }
                return res.status(201).send(updatedGuitar)
            }
        )
    })
    .delete((req, res, next) => {
        InventoryModel.findByIdAndDelete(
            { _id: req.params.inventoryId },
            (err, deletedGuitar) => {
                if (err) {
                    res.status(500)
                    return next(err)
                }
                return res.status(200).send(`deleted "${deletedGuitar.brand} ${deletedGuitar.model}" from database`)
            }
        )
    })

module.exports = inventory
