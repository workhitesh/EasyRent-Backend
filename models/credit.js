const mongoose = require('mongoose')

const creditSchema = new mongoose.Schema({
    ownerId: String,
    cardNumber: {
        type: Number,
        default: 0,
    },
    expiry: String,
})

module.exports = mongoose.model('Credit', creditSchema)