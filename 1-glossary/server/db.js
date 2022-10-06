const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const dbName = 'glossary';  //not sure if we really need this, but it is my database name

const uri = 'mongodb://127.0.0.1:27017/glossary';
mongoose.connect(uri, {useNewUrlParser: true});

// let db = mongoose.connection;
// /**may not need thie following */
// db.once('open', _ => { //not sure what this means
//   console.log('Database connected: ', uri);
// });
// db.on('error', err => {
//   console.log('Connection error: ', uri); //appears to be successful
// });

/**making new schema */
const wordsSchema = new Schema({
  word: String,
  definition: String
});

const Words = mongoose.model('Words', wordsSchema); //'words' is collection/table name now in my db

// probably in this file will be parameters (filter, edit, callback)
var createWord = (input) => {
  // console.log('input in db', input);
  return Words.create(input);
}

// probably in this file will be parameters (filter, edit, callback)
// Words.findOneAndUpdate({word: "defenestration"}, {word: "deforestation"}, (err, updated) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log('returned updatedWord', updated); //make this useful?
// });
var findWords = () => {
  return Words.find({});
}

// Words.findOneAndDelete({word: "perseverence"}, (err, deleted) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log('returned deleted', deleted);
// });

// module.exports.db = db;
module.exports.createWord = createWord;
module.exports.findWords = findWords;
// module.exports.create = Words.create;


// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
// 3. Export the models
// 4. Import the models into any modules that need them
