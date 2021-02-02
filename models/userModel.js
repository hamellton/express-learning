const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: String,
    surname: String,
    email: String,
    phone: Number,
    message: String
})

const User = mongoose.model('mongos', userSchema)

module.exports = User