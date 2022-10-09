import React from 'react';
import App from './App.jsx';

const {useState} = React;
//credit card #, expiry date, CVV, and billing zip code. ccNumber, expDate, billingzip
const CheckoutForm = ({object, openCart, handleSubmit, submitForm}) => {
  const [ccNumber, setCCNumber] = useState('');
  const [expDate, setExpDate] = useState('');
  const [billingzip, setBillingZip] = useState('');
//INSERT into responses(s_id, username, email, password, line1, line2, city, state, zip, phone, ccNumber, expDate, billingzip
if (!object.line2) {
  object.line2 = '-';
};
  return (
    <form onSubmit={(event)=> {
      event.preventDefault();
      submitForm(event); //need to make this
    }}>
      <div>{object.username}</div>
      <div>{object.email}</div>
      <div>{object.password}</div>
      <div>{object.line1}</div>
      <div>{object.line2}</div>
      <div>{object.city}</div>
      <div>{object.state}</div>
      <div>{object.zip}</div>
      <div>{object.phone}</div>
      <div>{object.ccNumber}</div>
      <div>{object.expDate}</div>
      <div>{object.billingzip}</div>
      <div><button type="submit">Purchase</button></div>
    </form>
  )
}

export default CheckoutForm;