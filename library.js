const mongoose = require("mongoose");

const librarySchema = mongoose.Schema({
    Name: {
        type: String,
        required: true,
    },
    BookID: {
        type: Number,
        required: true,
        unique: true,
    },
    BookType: {
        type: String,
        enum: ["Marvel", "DC", "Bhagvatgita", "Ramayan"],
        required: true,
    },
    Price: {
        type: Number,
        required: true,
    },
});

const library = mongoose.model('library', librarySchema);
module.exports = library;