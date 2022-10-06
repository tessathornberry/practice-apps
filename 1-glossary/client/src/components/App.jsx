import React from 'react';
import axios from 'axios';


const {useState, useEffect} = React;

const App = () => {

//PATCH must include an array w/2 items
useEffect((input) => {
  axios.get('http://localhost:3000/glossary', input)
  .then(response => console.log('response', response.data))
  .catch(err => console.log(err));
}, []);


  return (
  <div>
    <p>Hello, World!</p>
  </div>
  );
};

export default App;

