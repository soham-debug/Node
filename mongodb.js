const express = require("express");
const db = require("./moongoose");

const app = express();

app.get('/chicken', (req, res) => {
    res.send("Hi, Soham Kadtan");
});

app.listen(3002, () => {
    console.log("Your Chicken is ready on port 3002");
});
