const mongoose = require("mongoose")
const Schema = mongoose.Schema

// Blueprint
const destinationSchema = new Schema({
    country: {
        type: String,
        required: true,
        unique: true,
    },
    cost: {
        type: String,
        required: true,
        enum: ["low", "medium", "high"]
    },
    season: {
        type: String,
        required: true,
        enum: ["spring", "summer", "fall", "winter"]
    },
})

module.exports = mongoose.model("Destination", destinationSchema)