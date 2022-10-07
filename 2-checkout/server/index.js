require("dotenv").config();
const express = require("express");
const path = require("path");
const sessionHandler = require("./middleware/session-handler");
const logger = require("./middleware/logger");
const cors = require("cors");
const morgan = require("morgan");
// Establishes connection to the database on server start
// should we use this or have model and controller between??
// I think we need at least a model?

const db = require("./db");

const app = express();

// Adds `req.session_id` based on the incoming cookie value.
// Generates a new session if one does not exist.
app.use(sessionHandler);

// Logs the time, session_id, method, and url of incoming requests.
app.use(logger);

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));




/****
 *
 *
 *
 * Other routes here....
 *
 *
 */
// app.get();
app.post('/checkout', (req, res) => {
  console.log('req.body',req.body)
  res.send(req.params).status(201);

});
// app.

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
