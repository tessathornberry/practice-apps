import React from "react";
import Form1 from './Form1.jsx';
import Form2 from './Form2.jsx';
import Form3 from './Form3.jsx';
import CheckoutForm from './CheckoutForm.jsx';
import axios from 'axios';


const {useState, useEffect} = React;

const App = () => {
  const [page, setPage] = useState(1);
  const [isVisible, setIsVisible] = useState(true);
  const [checkoutResponse, setCheckoutResponse] = useState({}); //object
  const [buttonVisible, setButtonVisible] = useState(true);
  const [backButtonVisible, setBackButtonVisible] = useState(false);
  const [F1Visible, setF1Visible] = useState(false);
  const [F2Visible, setF2Visible] = useState(false);
  const [F3Visible, setF3Visible] = useState(false);
  const [checkoutVisible, setCheckoutVisible] = useState(false);

  /** declare result object and assign cookie as a value */
  //could we use useEffect here?
  useEffect(() => {
    checkoutResponse.s_id = document.cookie;
    console.log('object in app', checkoutResponse);
  }, []);

  //might have to be an array
  const handleSubmit = (values) => {  //going to have to eventually put it all in order because it is alphabetizing
    const newValues = {...values};
    console.log('newValues', newValues);
  }

  /** function to set forms visible or not */
  var Form = ({formNumber, isVisible}) => {
    return isVisible ? <div className="form">{formNumber}, this one</div> : null;
  };

  var Form1Visible = ({isVisible}) => {
    return isVisible ? <Form1 isVisible={F1Visible} object={checkoutResponse} openCart={openCart} handleSubmit={handleSubmit}/> : null;
  };

  var Form2Visible = ({isVisible}) => {
    return isVisible ? <Form2 isVisible={F2Visible} object={checkoutResponse} openCart={openCart} handleSubmit={handleSubmit}/> : null;
  }

  var Form3Visible = ({isVisible}) => {
    return isVisible ? <Form3 isVisible={F3Visible} object={checkoutResponse} openCart={openCart} handleSubmit={handleSubmit} /> : null;
  }

  var CheckoutFormVisible = ({isVisible}) => {
    return isVisible ? <CheckoutForm isVisible={checkoutVisible} object={checkoutResponse} openCart={openCart} handleSubmit={handleSubmit} submitForm={submitForm}/> : null;
  }

  var Button = ({isVisible}) => {
    return isVisible ? <button id="checkout" onClick={(event) => {openCart(event)}}>Checkout</button> :
    null;
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
    } else if (page === 4) {
      setF3Visible(false);
      setCheckoutVisible(true);
    } else {
      setCheckoutVisible(false);
      setButtonVisible(true);
      //change this out for submit button on form 3 - close browswer? clear cookie?
    }
  };

  var submitForm = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3000/checkout', checkoutResponse)
    .then((response) =>  {
      console.log('form submitted!', response)
      //clear screen and put happy image here
    })
    .catch((err => {
      console.log(err);
      //put some kind of response here to indicate custoemr has already submitted form
    }))
  };

  return (
    <div>
      <div></div>
      <Form1Visible isVisible={F1Visible} />
      <Form2Visible isVisible={F2Visible} />
      <Form3Visible isVisible={F3Visible} />
      <CheckoutFormVisible isVisible={checkoutVisible} />
      <Button isVisible={buttonVisible} formNumber="button" />
    </div>

  )
};

export default App;
