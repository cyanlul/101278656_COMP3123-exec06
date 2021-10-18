const express = require('express');
const noteRouter = require('./routes/NoteRoutes')
const mongoose = require('mongoose');

const DB_URL = "mongodb+srv://dilan:jeffhardymay1@comp3123.e5acu.mongodb.net/test?authSource=admin&replicaSet=atlas-mf8apm-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true"
const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(noteRouter)

mongoose.Promise = global.Promise;

// TODO - Update your mongoDB Atals Url here to Connect to the database
mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database mongoDB Atlas Server");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

app.get('/', (req, res) => {
    res.send("<h1>Welcome to Note taking application - Week06 Exercise</h1>");
});


app.listen(8081, () => {
    console.log("Server is listening on port 3000");
});