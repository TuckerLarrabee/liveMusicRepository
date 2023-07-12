const express = require('express');
const app = express();
const port = 3000; // Choose your desired port number
const cors = require('cors');
const path = require('path')
const awsCall = require('./aws')
require('dotenv').config()


app.use(cors());

app.use(express.static(__dirname + '/public'));

// Define routes
app.get('/', async (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/audioFiles', async (req, res) => {
    let files = await awsCall()
    res.status(200).json(files)
});

// app.get('/:artistName', async (req, res) => {
//     let artistName = req.params.id
// });

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});