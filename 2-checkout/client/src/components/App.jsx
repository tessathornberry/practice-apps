import React from "react";


const {useState, useEffect} = React;

const App = () => {
  const [page, setPage] = useState(1);
  const [isVisible, setIsVisible] = useState(true);
  const [buttonVisible, setButtonVisible] = useState(true);
  const [F1Visible, setF1Visible] = useState(false);
  const [F2Visible, setF2Visible] = useState(false);
  const [F3Visible, setF3Visible] = useState(false);

  /** declare result object and assign cookie as a value */
  //could we use useEffect here?
  var checkoutResponse = {};
  checkoutResponse.s_id = document.cookie;
  console.log('object in app', checkoutResponse);

  /** function to set forms visible or not */
  var Form = ({formNumber, isVisible}) => {
    return isVisible ? <div className="form">{formNumber}, this one</div> : null;
  }

  var Form1Visible = ({isVisible}) => {
    return isVisible ? <Form1 isVisible={F1Visible} object={checkoutResponse} openCart={openCart}/> : null;
  }

  var Button = ({isVisible}) => {
    return isVisible ? <button id="checkout" onClick={(event) => {openCart(event)}}>Checkout</button> :
    null;
    // <button id="checkout" onClick={(event) => {openCart(event)}}>Next</button>;
  };

  var openCart = (event) => {
    event.preventDefault();
    setPage(page + 1);
    if (page === 1) {
      console.log("hooray, page 1!")
      setButtonVisible(false);
      setF1Visible(true);
    } else if (page === 2) {
      console.log("hooray, page 2!")
      setF1Visible(false);
      setF2Visible(true);
    } else if (page === 3) {
      console.log("hooray, page 3!")
      setF2Visible(false);
      setF3Visible(true);
    } else {
      console.log("should have checked out already!");
      setF3Visible(false);
      setButtonVisible(true); //change this out for submit button on form 3
    }
  }

  return (
    <div>
      <h3>Hi hi!</h3>
      {/* <Form isVisible={F1Visible} formNumber="F1" /> */}
      <Form1Visible isVisible={F1Visible}/>
      <Form isVisible={F2Visible} formNumber="F2" />
      <Form isVisible={F3Visible} formNumber="F3" />
      <Button isVisible={buttonVisible} formNumber="button" />
      {/* <button id="checkout" onClick={(event) => {openCart(event)}}>Checkout</button> */}
    </div>

  )
};
//pass result object along tp forms as a prop, an array of key/value pairs, or return the values to the app file?
//F1 collects name, email, and password for account creation.
const Form1 = ({object, openCart}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  return (

    <form onSubmit={(event)=> {
      event.preventDefault();
      object.username = name;
      object.email = email;
      object.password = password;
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

export default App;
