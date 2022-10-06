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

/******************* WordEntry, editing, deleting ******************/
const WordEntry = ({word, definition, deleteWord, editWords}) => {
  console.log('inWordEntry', word);
  const [showEdit, setShowEdit] = useState(true);
  const [currentWord, setCurrentWord] = useState(word);
  const [currentDef, setCurrentDef] = useState(definition);

  var wordStorage = word;

  //onclick, should I have the word actually editable? should I do a pop up? re-render?
  if (showEdit) {
    return (
      <li style={{"fontSize":"large","listStyleType":"none"}}>
           {word}:    {definition}
        <div>
        <button onClick={(event) => {
          setShowEdit(!showEdit)}}>edit</button>
                  <button>delete</button>
        {/* <button onClick={(event) => {
          setShowEdit(!showEdit)}}>delete</button> */}
        </div>
      </li>
    )

  } else {
    return (
      <form onSubmit={(event) => {
        event.preventDefault();
        var passingArray = [];
        var newWord = {};
        var oldWord = {};
        oldWord.word = wordStorage;
        console.log('wordStorage', wordStorage);
        passingArray.push(oldWord);
        console.log('passingArray old word', passingArray);

        newWord.word = currentWord;
        newWord.definition = currentDef;
        console.log('passingArray new word', passingArray);
        passingArray.push(newWord);
        editWords(passingArray);
        setShowEdit(!showEdit);
      }}>
        <input type="text" placeholder="Edit the word..." value={currentWord} onChange={(event) => setCurrentWord(event.target.value)}/>
        <input type="text" placeholder="Edit the definition..." value={currentDef} onChange={(event) => setCurrentDef(event.target.value)}/>
        <button type="submit">Add Edit</button>
      </form>
    )
  }
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

