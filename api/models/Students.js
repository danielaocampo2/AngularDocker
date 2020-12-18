const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema for Business
let Students = new Schema({
    names: {
        type: String,
        required: true
    },
    cc: {
        type: Number,
        required: true,
        unique: true
    },
    semester: {
        type: Number,
        required: true
    },
    course: {
        type: String,
        required: true
    },
    grade: {
        type: Number,
        required: false
    },
    status: {
        type: String,
        default: "1"
    }

}, {
    collection: 'students'
});
module.exports = mongoose.model('Students', Students);