require("dotenv").config();
const db = require('./db.js')
const express = require("express");
const path = require("path");
const cors = require('cors');
const morgan = require('morgan');

const app = express();

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
/****
 *
 *
 * Other routes here....
 *
 *
 */
const port = process.env.PORT || 3000;
// app.set('port', process.env.PORT || 3000);
app.listen(port);
console.log(`Listening at http://localhost:${port}`);
