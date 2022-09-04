
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Task = new Schema(
    {
        Task: { type: String, required: true },
        Priority: { type: String, required: true },
        Description: { type: String, required: true },
        By_who: { type: String, required: true },
        Stage: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('tasks', Task)