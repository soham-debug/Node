const mongoose = require("mongoose");

const mongourl = "mongodb://localhost:27017/soham";

mongoose.connect(mongourl, {

});

const db = mongoose.connection;

db.on('connected', () =>{
    console.log("MongoDB Connected");
});

db.on('error', (err) => {
    console.error("MongoDB connection error", err);
});

db.on('disconnected', () =>{
    console.log("MongoDB is disconnected");
});

module.exports = db;