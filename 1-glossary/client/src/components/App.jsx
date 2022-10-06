import React from 'react';
import axios from 'axios';


const {useState, useEffect} = React;

const App = () => {
let [words, setWords] = useState([]);
var wordHolder = [];

useEffect((input) => {
  axios.get('http://localhost:3000/glossary', input)
  .then((response) => {
    for (var i = 0; i < response.data.length; i++) {
      wordHolder.push(response.data[i]);
    }
    setWords(wordHolder);
  })
  .catch(err => console.log(err));
}, []);

var addWord = (entry) => { //has to be in object format
  axios.post('http://localhost:3000/glossary', entry)
  .then((response) => {
    console.log('response data', response.data);
    setWords([...words, response.data]);
  })
  .catch(err => console.log(err));
}

//PATCH must include an array w/2 items
var editWords = (editedEntry) => {
  axios.patch('http://localhost:3000/glossary', editedEntry)
  .then((response) => {
    console.log('response data', response.data);
    // setWords([...words, response.data]); //should re-render
  })
  .catch(err => console.log(err));
}

var deleteWord = (deletedEntry) => {
  axios.patch('http://localhost:3000/glossary', deletedEntry)
  .then((response) => {
    console.log('response data', response.data);
    // setWords([...words, response.data]); //should re-render
  })
  .catch(err => console.log(err));
}

//I need to map the words and send them to components
return (
  <div>
    <h2>Glossary</h2>
    <AddWordForm handleSubmission={addWord}/>
    <div><form></form></div>
    <WordList words={words} editWords={editWords} deleteWord={deleteWord} />
  </div>
  );
};

/******************* WordList ******************/
const WordList = ({words, deleteWord, editWords}) => {
  return (
    <ul>
      {words.map((word) =>
        <WordEntry word={word.word} definition={word.definition} key={word._id} deleteWord={deleteWord} editWords={editWords}/>
      )}
    </ul>
  )
};

/******************* WordEntry ******************/
const WordEntry = ({word, definition, deleteWord, editWords}) => {
  console.log(word);
  const [showEdit, setShowEdit] = useState(true);
  var wordStorage = word;

  // var handleEdit = (event) => {

  // }

  //onclick, should I have the word actually editable? should I do a pop up?
  return (
    <li style={{"fontSize":"large","listStyleType":"none"}}>
         {word}:    {definition}
      <div>
      <button onClick={(event) => {
        wordStorage = word;
        setShowEdit(!showEdit)}}>edit</button>
      <button>delete</button>
      </div>
    </li>

  )
};

const AddWordForm = ({handleSubmission}) => {
  const [newWordEntry, setNewWordEntry] = useState('');
  const [newDefEntry, setNewDefEntry] = useState('');


  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      var newWord = {};
      newWord.word = newWordEntry;
      newWord.definition = newDefEntry;
      handleSubmission(newWord)
    }}>
      <input type="text" placeholder="Add a new word..." value={newWordEntry} onChange={(event) => setNewWordEntry(event.target.value)}/>
      <input type="text" placeholder="Add a definition..." value={newDefEntry} onChange={(event) => setNewDefEntry(event.target.value)}/>
      <button type="submit">Add new word</button>
    </form>
  )
}

export default App;

