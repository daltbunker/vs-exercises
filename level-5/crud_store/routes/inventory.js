const express = require("express")
const InventoryModel = require("../models/inventory")
const inventory = express.Router()

// get, post
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

// get one, put, delete
inventory.route("/:inventoryId")

module.exports = inventory
