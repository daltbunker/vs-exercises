const express = require("express")
const {v4: uuid} = require("uuid")

const sportRouter = express.Router()

const sports = [
    {
        name: "hockey",
        team: true,
        cost: 1000,
    },{
        name: "football",
        team: true,
        cost: 200,
    },{
        name: "soccer",
        team: true,
        cost: 70,
    },{
        name: "baseball",
        team: true,
        cost: 500,
    },{
        name: "track",
        team: true,
        cost: 100,
    },{
        name: "gymnastics",
        team: false,
        cost: 2000,
    },{
        name: "climbing",
        team: false,
        cost: 700,
    }
]

sportRouter.route("/")
    .get((req, res) => {
        const queries = Object.keys(req.query)
        if (queries.length === 0) {
            res.send(sports)
        } else if (queries.length === 1) {
            const matchingSports = sports.filter(sport => sport[queries[0]] === req.query[queries[0]])
            res.send(matchingSports)
        } else {
            const matchingSports = sports.filter(sport => {
                return sport.cost > req.query.min && sport.cost < req.query.max
            })
            res.send(matchingSports)
        }
    })


module.exports = sportRouter