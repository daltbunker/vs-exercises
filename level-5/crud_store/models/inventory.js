const mongoose = require("mongoose")
const { Schema } = mongoose

const inventorySchema = new Schema({
    brand: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true,
        enum: ["electric", "acoustic", "bass"]
    },
    strings: Number,
    price: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
})

module.exports = mongoose.model("InventoryModel", inventorySchema)