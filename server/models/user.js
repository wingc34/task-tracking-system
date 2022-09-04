
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema(
    {
        userId: { type: String, required: true },
        Name: { type: String, required: true },
        Email: { type: String, required: true },
        Title: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('users', User)