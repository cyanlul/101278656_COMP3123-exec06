const noteModel = require('../models/Notes.js');
const express = require('express')
const app = express()

//TODO - Create a new Note
//http://mongoosejs.com/docs/api.html#document_Document-save
app.post('/notes', (req, res) => {
    // Validate request

    //TODO - Write your code here to save the note
    let note = new noteModel(req.body)

    try {
        await note.save()
        res.send(note)
        res.status(200).send("Note saved")
    } catch (err) {
        console.log("ERROR: Note saved: " + err)
        res.status(500).send(err)
    }
});

//TODO - Retrieve all Notes
//http://mongoosejs.com/docs/api.html#find_find
app.get('/notes', async (req, res) => {
    // Validate request

    //TODO - Write your code here to returns all note
    const notes = await noteModel.find({})
    try {
        res.send(notes)
    } catch (err) {
        console.log("Error: " + err)
        res.status(500).send(err)
    }
});

//TODO - Retrieve a single Note with noteId
//http://mongoosejs.com/docs/api.html#findbyid_findById
app.get('/notes/:noteId', (req, res) => {
    // Validate request

    //TODO - Write your code here to return only one note using noteid
    try {
        let id = await noteModel.findById(req.params.notesId)
        res.send(id)
    } catch (err) {
        console.log("ERROR: " + err)
        res.status(500).send(err)
    }
});

//TODO - Update a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
app.put('/notes/:noteId', (req, res) => {
    // Validate request

    //TODO - Write your code here to update the note using noteid
    try {
        await noteModel.findByIdAndUpdate(req.params.noteId, req.body)
        note = await noteModel.save()
        res.send(note)
        console.log("Note Updated")
        res.status(200).send("Note Updated")
    } catch (err) {
        console.log("ERROR: Note Not Updated " + err)
        res.status(500).send(err)
    }
});

//TODO - Delete a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
app.delete('/notes/:noteId', (req, res) => {
    // Validate request

    //TODO - Write your code here to delete the note using noteid
    try {
        let note = await noteModel.findByIdAndDelete(req.params.noteId)

        if (!note) res.status(404).send("No Note Found")
        res.status(200).send("Note Deleted Successfully")
    } catch (err) {
        res.status(500).send(err)
    }
});

module.exports = app