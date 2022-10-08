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
  var params = req.body;
  var queryStr = "INSERT into responses(username, password, line1, line2, city, state, zip, phone, ccNumber, expDate, billingzip) VALUES(?,?,?,?,?,?,?,?,?,?,?)";
  db.queryAsync(queryStr, params, (err, results) => {

  })
  .then((results) => console.log('results', results))
  .catch((err) => console.log('err', err));

  //I have to pass the req body on to the model to handle unless I want to raw data it here
  //what would that look like? oof, forgot mysql!!

});
// app.

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
