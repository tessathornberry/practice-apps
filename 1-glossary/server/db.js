const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const dbName = 'glossary';  //not sure if we really need this, but it is my database name

const uri = 'mongodb://127.0.0.1:27017/glossary';
mongoose.connect(uri, {useNewUrlParser: true});

/**making new schema */
const wordsSchema = new Schema({
  word: String,
  definition: String
});

const Words = mongoose.model('Words', wordsSchema); //'words' is collection/table name now in my db
//GET
var findWords = () => {
  return Words.find({}); //make sure there is an empty object here!
};
//POST
var createWord = (input) => {
  return Words.create(input);
};
//PUT
var updateWord = (filter, update) => {
  return Words.findOneAndUpdate(filter, update);
};
//DELETE
var deleteWord = (input) => {
  return Words.findOneAndDelete(input);
};

// module.exports.db = db;
module.exports.createWord = createWord;
module.exports.findWords = findWords;
module.exports.updateWord = updateWord;
module.exports.deleteWord = deleteWord;

// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
// 3. Export the models
// 4. Import the models into any modules that need them
