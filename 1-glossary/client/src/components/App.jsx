import React from 'react';
import axios from 'axios';


const {useState, useEffect} = React;

const App = () => {
//this is returning the index.html file instead of the data from the database - fix axios req.?
useEffect(() => {
  axios.get('http://localhost:3000/glossary')
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

