const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
    RollNo: {
        type: Number,
        required: true,
        unique: true,
    },
    Name: {
        type: String,
        required: true,
    },
    Marks: {
        type: Number,
        required: true,
    }
});

const student = mongoose.model('student', studentSchema);
module.exports = student;