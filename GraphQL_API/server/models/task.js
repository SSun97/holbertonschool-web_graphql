const mongoose = require('mongoose')
const {Schema} = require('mongoose');

const taskSchema = new Schema({
    title: String,
    weight: Number,
    description: String,
    projectId: String
});

module.exports = mongoose.model('Task', taskSchema);