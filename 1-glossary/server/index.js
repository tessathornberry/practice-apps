require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require('cors');
const morgan = require('morgan');
const db = require('./db.js')
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
// app.get();
// app.post();
// app.put();
// app.delete();

app.listen(port);
console.log(`Listening at http://localhost:${port}`);
