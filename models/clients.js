const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    goal:  { type: String, required: true },
    sessions:  { type: Number, required: true },
    payment: String
})

module.exports = mongoose.model('Client', clientSchema)