import React from 'react';
import axios from 'axios';


const {useState, useEffect} = React;

const App = () => {
let [words, setWords] = useState([]);
//PATCH must include an array w/2 items
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
      //if post is successful, re-render page with obj without id, or re-get?
      console.log('response data', response.data);
      setWords([...wordHolder, entry]);
    })
    .catch(err => console.log(err));
}

 //I need to map the words and send them to components
  return (
  <div>
    <h2>Glossary</h2>
    <AddWordForm handleSubmission={addWord}/>
    <div><form></form></div>
    <WordList words={words}/>
  </div>
  );
};
/******************* WordList ******************/
const WordList = ({words}) => {
  return (
    <ul>
      {words.map((word) =>
        <WordEntry word={word.word} definition={word.definition} key={word._id}/>
      )}
    </ul>
  )
};

/******************* WordEntry ******************/
const WordEntry = ({word, definition}) => {
  console.log('word', word);
  console.log('definition', definition);

  return (
    <li style={{"fontSize":"large","listStyleType":"none"}}>
         {word}:    {definition}
      <div>
      <button>edit</button>
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

