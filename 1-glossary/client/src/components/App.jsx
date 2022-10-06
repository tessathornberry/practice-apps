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
      var currentWord = response.data[i];
      var obj = {}; //not sure I need all this
      obj.word = currentWord.word;
      obj.definition = currentWord.definition;
      obj.id = currentWord._id;
      wordHolder.push(obj);
    }
    console.log('wordHolder', wordHolder);
    setWords(wordHolder);
    // console.log('response', response.data)
  })
  .catch(err => console.log(err));
}, []);

 //I need to map the words and send them to components
  return (
  <div>
    <h2>Glossary</h2>
    <div><form></form></div>
    <WordList words={words}/>



  </div>
  );
};
/******************* WordList ******************/
const WordList = ({words}) => {
  console.log('words in WordList', words);
  return (
    <ul>
      {words.map((word) =>
        <WordEntry word={word.word} definition={word.definition} key={word.id}/>
      )}
    </ul>
  )
};


/******************* WordEntry ******************/
const WordEntry = ({word, definition}) => {
  console.log('word', word);
  console.log('definition', definition);
  return (
    <li style={{"list-style-type":"none"}}>{word}: {definition}</li>
  )
}

export default App;

