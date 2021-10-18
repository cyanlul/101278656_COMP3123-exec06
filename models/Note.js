const mongoose = require('mongoose');

//TODO - Create Note Schema here having fields
//      - noteTitle
//      - noteDescription
//      - priority (Value can be HIGH, LOW or MEDUIM)
//      - dateAdded
//      - dateUpdated

const NoteSchema = new mongoose.Schema({
    note_title: String,
    note_description: String,
    priority: ["High", "Low", "Meduim"],
    dated_added: String,
    date_updated: String
})

let note = mongoose.model("note", NoteSchema)
module.exports = note