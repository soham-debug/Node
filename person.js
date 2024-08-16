const mongoose = require("mongoose");

const PersonSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Mobile: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    Gender: {
        type: String,
        enum: ["Male", "Female", "Transgender"] 
    }
});

const person = mongoose.model('person', PersonSchema);
module.exports = person;