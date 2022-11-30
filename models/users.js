const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    profilePic: String,
    email: String,
    password: String
})

module.exports = mongoose.model('Users', userSchema)