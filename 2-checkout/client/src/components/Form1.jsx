import React from 'react';
import App from './App.jsx';

const {useState} = React;

const Form1 = ({object, openCart, handleSubmit}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form onSubmit={(event)=> {
      event.preventDefault();
      var array = [];
      object.username = name;
      object.email = email;
      object.password = password;
      handleSubmit(object);
      console.log('object in Form 1', object);
      openCart(event);
    }}>
      <div><input type="text" placeholder="username..." value={name} onChange={(event) => setName(event.target.value)} required></input></div>
      <div><input type="text" placeholder="e-mail..." value={email} onChange={(event) => setEmail(event.target.value)} required></input></div>
      <div><input type="text" placeholder="password..." value={password} onChange={(event) => setPassword(event.target.value)} required></input></div>
      <div><button type="submit">Next</button></div>
    </form>
  )
}

export default Form1;