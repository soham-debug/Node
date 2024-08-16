const express = require("express");
const router = express.Router();
const library = require("./../library");

router.post('/', async(req, res)=>{
    try{
        const db = req.body;
        const newBook = new library(db);
        const response = await newBook.save();
        console.log("Data is Saved");
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(404).json({error: "Server is down"});
    }
});

router.get('/', async(req, res)=>{
    try{
        const data = await library.find();
        console.log("Data is fetched");
        res.status(200).json(data);
    }catch(err){
        res.status(404).json({error: "Error detected"});
    }
});

router.put('/:id', async(req, res)=>{
    try{
        const libraryid = req.params.id;
        const updatePersonData = req.body;
        const response = await library.findByIdAndUpdate(libraryid, updatePersonData);
        console.log("data is Updated");
        res.status(200).json(response);
    }catch(err){
        res.status(404).json({error: "Error detected"});
    }
});

router.delete("/", async(req, res)=>{
    try{
        const libraryid = req.params.id;
        const data = req.body;
        const remove = await libraryid.findByIdAndRemove(libraryid);
        console.log("Record deleted Successfully");
        res.status(200).json(remove); 
    }catch(err){
        res.status(404).json({error: "Error detected"});
    }
})

module.exports = router;