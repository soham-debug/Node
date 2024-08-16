const mongoose = require("mongoose");

const mongourl = "mongodb://localhost:27017/soham";

mongoose.connect(mongourl, {

});

const db = mongoose.connection;

db.on('connected', () => {
    console.log("Connection is established with MongoDB server");
});

db.on('error', (err) => {
    console.error("Error 404", err);
});

db.on('disconnected', () => {
    console.log("Disconnected from MongoDB server");
});

module.exports = db;
