// const db = require('.db');
const db = require("./db");
console.log('db in model', db)

module.exports = {
  //if the id is already in the table, refresh the client page, otherwise, store the data in the db
  queryS_ID: function(params, callback) {
    var queryString = "SELECT responses.s_id FROM responses WHERE s_id = ?";
    console.log('params in queryS_ID in model.js', params);
    db.query(queryString, params, (err, results) => {
      if (err) throw (err);
      console.log('results of create in models', results);
      callback(err, results);
    });
  },

  create: function(params, callback) {
    console.log('params in model.js', params);
    var queryString = "INSERT into responses(s_id, username, password, line1, line2, city, state, zip, phone, ccNumber, expDate, billingzip) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    db.query(queryString, params, (err, results) => {
      if (err) throw (err);
      console.log('results of create in models', results);
      callback(err, results);
    });
  },

  getAll: function(callback) { //do I want to get everything or just foor one user?
    var queryString = "SELECT * FROM responses";
    db.query(queryString, (err, results) => {
      console.log("results of getAll in models!", results);
      callback(err, results);
    });
  }
};



//  {"username":"tessa", "password":"123456", "line1":"12234 timber lane", "line2":"Apt 2", "city":"grizzly", "state":"CA", "zip":"94555", "phone":"510-967-5309", "ccNumber":"1234567", "expDate":"11/2022", "billingzip":"94555"}