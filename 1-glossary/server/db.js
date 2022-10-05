const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const dbName = 'glossary';
// let db;
// const url = "mongodb://127.0.0.1:27017/glossary";
const url = "http://localhost:3000/glossary";


mongoose.connect(url, { useNewUrlParser: true});

let db = mongoose.connection;
db.once('open', _ => {
  console.log('Database connected: ', url);
});
db.on('error', err => {
  console.log('Connection error: ', url);
});
// db = client.db(dbName);
// db.on("error", console.error.bind(console, "MongoDB connection error:"));
// console.log(`Connected MongoDB: ${url}`);
// console.log(`Database/: ${dbName}`);


// const glossarySchema = new Schema({
//   word: String,
//   definition: String
// });

// const Glossary = mongoose.model('Glossary', glossarySchema);

// const wordInstance = new Glossary({word:'defenestration', definition: 'to throw someone or something out of a window'});

// wordInstance.save((err) => {
//   if (err) {
//     console.log(err);
//   }

// })

module.exports = db;
// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
// 3. Export the models
// 4. Import the models into any modules that need them
