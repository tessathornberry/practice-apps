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
const models = require("./model.js");


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
 */

// app.get();
app.post('/checkout', (req, res) => {
  var checkSID = req.body.s_id;

  console.log('checkSID', checkSID);
  if (models.queryS_ID(checkSID, (err, result) => {
    if (err) {
      console.log('error', err);
    } else {
      res.sendStatus(201).end();
    }
    console.log('result', result);
  }))
  //put some sort of 'if cookie is already in db or such here'
  //if
  var params = Object.values(req.body);
  // console.log('params in server.index.js', params);
  models.create(params, (err, result) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.sendStatus(201).end();
    }
    return result;
  })
});
// app.

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
