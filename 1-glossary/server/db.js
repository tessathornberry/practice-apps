const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const dbName = 'glossary';  //not sure if we really need this

const uri = 'mongodb://127.0.0.1:27017/glossary';
mongoose.connect(uri, {useNewUrlParser: true});

let db = mongoose.connection;

db.once('open', _ => { //not sure what this means
  console.log('Database connected: ', uri);
});
db.on('error', err => {
  console.log('Connection error: ', uri); //appears to be successful
});

/**making new schema */
const wordsSchema = new Schema({
  word: String,
  definition: String
});

const Model = mongoose.model('Words', wordsSchema);
const words = new Model(); //hooray, this is now a collection in my glossary database!


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
