import React from 'react';
import App from './App.jsx';

const {useState} = React;
//ship to address (line 1, line 2, city, state, zip code) and phone number.
const Form2 = ({object, openCart, handleSubmit}) => {
  const [line1, setLine1] = useState('');
  const [line2, setLine2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [phone, setPhone] = useState('');


  return (
    <form onSubmit={(event)=> {
      event.preventDefault();
      object.line1 = line1;
      object.line2 = line2;
      object.city = city;
      object.state = state;
      object.zip = zip;
      object.phone = phone;
      handleSubmit(object);
      console.log('object in Form 2', object);
      openCart(event);
    }}>
      <div><input type="text" placeholder="address line 1..." value={line1} onChange={(event) => setLine1(event.target.value)} required></input></div>
      <div><input type="text" placeholder="address line 2..." value={line2} onChange={(event) => setLine2(event.target.value)} required></input></div>
      <div><input type="text" placeholder="city..." value={city} onChange={(event) => setCity(event.target.value)} required></input></div>
      <div><input type="text" placeholder="state..." value={state} onChange={(event) => setState(event.target.value)} required></input></div>
      <div><input type="text" placeholder="zip..." value={zip} onChange={(event) => setZip(event.target.value)} required></input></div>
      <div><input type="text" placeholder="phone number..." value={phone} onChange={(event) => setPhone(event.target.value)} required></input></div>
      <div><button type="submit">Next</button></div>
    </form>
  )
}

export default Form2;