import React from 'react';
import App from './App.jsx';

const {useState} = React;
//credit card #, expiry date, CVV, and billing zip code. ccNumber, expDate, billingzip
const Form3 = ({object, openCart, handleSubmit}) => {
  const [ccNumber, setCCNumber] = useState('');
  const [expDate, setExpDate] = useState('');
  const [billingzip, setBillingZip] = useState('');

  return (
    <form onSubmit={(event)=> {
      event.preventDefault();
      object.ccNumber = ccNumber;
      object.expDate = expDate;
      object.billingzip = billingzip;
      handleSubmit(object);
      console.log('object in Form 3', object);
      openCart(event);
    }}>
      <div><input type="text" placeholder="Credit Card Number..." value={ccNumber} onChange={(event) => setCCNumber(event.target.value)} required></input></div>
      <div><input type="text" placeholder="expiration date mm/yyyy or mm/yy..." value={expDate} onChange={(event) => setExpDate(event.target.value)} required></input></div>
      <div><input type="text" placeholder="billingzip..." value={billingzip} onChange={(event) => setBillingZip(event.target.value)} required></input></div>
      <div><button type="submit">Next</button></div>
    </form>
  )
}

export default Form3;