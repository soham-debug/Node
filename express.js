const express = require('express');
const app = express();
const moongoose = require("./moongoose");
const person = require("./person");
const student = require("./student");
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get('/response', function (req, res){
    res.send("Hello World");
})

app.post('/student', async(req, res)=>{
    try{
        const db = req.body;
        const newStudent = new student(db);
        const store = await newStudent.save();
        console.log("Data is Saved");
        res.status(200).json(store);
    }catch(err){
        console.log(err);
        res.status(500).json({error: "error is detected"});
    }
})

app.get('/messege', function (req, res) {
    res.send("My name is soham");
})

app.get('/menu', function (req, res) {
    var menu = {
        Name: "Chicken Fried Rice",
        Price: 120,
        Type: "Full"
    }
    res.send(menu);
})

app.post('/person', async(req, res)=>{
    try{
        const data = req.body
        const newPerson = new person(data);
        const response = await newPerson.save();
        console.log("data is saved");
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({error: "Internal server error"});
    }
})
const lib = require('./router/lib');
app.use('/library', lib);

//Listening
app.listen(3000, () => {
    console.log("Server is running");
});