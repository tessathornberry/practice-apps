require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require('cors');
const morgan = require('morgan');
const db = require('./db.js')

// console.log('db', db.models);
const port = process.env.PORT || 3000;

const app = express();
console.log('path', path.join(__dirname, "../client/dist"))
// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));

//logging and parsing - I've always seen these
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// methods sent by client
app.get('/glossary', (req, res) => {
  db.findWords()
    .then((value) => {
      res.status(200).send(value)
    })
    .catch((err) => console.log(err))
});

app.post('/glossary', (req, res) => {
  db.createWord(req.body)
    .then((value) => {  //this is whatever is returned by db.js
      res.status(201).send(value);
    })
    .catch(err => console.log(err))
  });

// app.put();
app.patch('/glossary', (req, res) => {
  db.updateWord(req.body[0], req.body[1]) //2 inputs?
    .then((value) => {  //this is whatever is returned by db.js
      res.status(204).send(value); //do not need to do anything with this value, but client should re-render upon success, possible new get request?
    })
    .catch(err => console.log(err))
  });

// app.delete();
app.delete('/glossary', (req, res) => {
  console.log('req.body', req.body);
  db.deleteWord(req.body)
    .then((value) => {  //this is whatever is returned by db.js
      res.status(204).send(value); //do not need to do anything with this value, but client should re-render upon success, possible new get request?
    })
    .catch(err => console.log(err))
  });

app.listen(port);
console.log(`Listening at http://localhost:${port}`);
