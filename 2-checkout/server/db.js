// require("dotenv").config();
const mysql = require("mysql2");
const Promise = require("bluebird");

// Configure process.env variables in ../.env
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

const db = Promise.promisifyAll(connection, { multiArgs: true });

db.connectAsync()
  .then(() => console.log(`Connected to MySQL as id: ${db.threadId}`))
  .then((result) => {
    console.log('db.threadId', db.threadId);
    // Expand this table definition as needed:

    db.queryAsync(
      "CREATE TABLE IF NOT EXISTS responses (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, username VARCHAR(35) NOT NULL, password VARCHAR(25), line1 VARCHAR(50), line2 VARCHAR(50), city VARCHAR(50), state VARCHAR(50), zip INT(11), phone VARCHAR(25), ccNumber VARCHAR(35), expDate VARCHAR(20),billingzip INT(11))"
    ) //this creates responses table - what do I store there other than auto-incrementing id? is this the session id? Or is this where we were supposed to create our schema?
  })
  .catch((err) => console.log(err));

module.exports = db;
