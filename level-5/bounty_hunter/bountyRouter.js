const express = require("express")
const Bounties = require("./model/bounties")
const bountyRouter = express.Router()

// const bounties = [
//     {
//         firstName: "Ron",
//         lastName: "Lowe",
//         living: false,
//         bountyAmount: 200,
//         type: "sith",
//     },
//     {
//         firstName: "Yonny",
//         lastName: "Simpson",
//         living: true,
//         bountyAmount: 4000,
//         type: "jedi",
//     },
//     {
//         firstName: "Opal",
//         lastName: "Simpson",
//         living: true,
//         bountyAmount: 25,
//         type: "jedi",
//     },
// ]

bountyRouter.route("/")
    .get((req, res, next) => {
        Bounties.find((err, bounties) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(bounties)
        })
    })
    .post((req, res, next) => {
        const newBounty = new Bounties(req.body)
        newBounty.save((err, bounty) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(bounty)
        })
    })

bountyRouter.route("/:bountyId")
    .put((req, res, next) => {
        Bounties.findOneAndUpdate(
            { _id: req.params.bountyId},
            req.body,
            { new: true },
            (err, updatedBounty) => {
                if (err) {
                    res.status(500)
                    return next(err)
                }
                return res.status(201).send(updatedBounty)
            }
        )
    })
    .delete((req, res, next) => {
        Bounties.findOneAndDelete(
            { _id: req.params.bountyId},
            (err, deletedBounty) => {
                if (err) {
                    res.status(500)
                    return next(err)
                }
                return res.status(201).send(`"${deletedBounty.firstName}" was removed from bounties`)
            }
        )
    })

module.exports = bountyRouter