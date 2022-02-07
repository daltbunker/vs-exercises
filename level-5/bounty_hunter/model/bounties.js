const mongoose = require("mongoose")
const { Schema } = mongoose

const bountySchema = new Schema({
    firstName: String,
    lastName: String,
    living: Boolean,
    bountyAmount: Number,
    type: {
        type: String,
        enum: ["sith", "jedi"]
    }
})

module.exports = mongoose.model("Bounties", bountySchema)