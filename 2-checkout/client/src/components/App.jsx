import React from "react";


const {useState, useEffect} = React;

const App = () => {
  const [page, setPage] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const [F1Visible, setF1Visible] = useState(false);
  const [F2Visible, setF2Visible] = useState(false);
  const [F3Visible, setF3Visible] = useState(false);

  /** declare result object and assign cookie as a value */
  var checkoutResponse = {};
  checkoutResponse.s_id = document.cookie;

  /** function to set forms visible or not */
  var Form = ({formNumber, isVisible}) => {
    if (isVisible) {
      return <div className="form">{formNumber}, this one</div>;
    }
    return null;
    // return <div className="form">{formNumber}, make null</div>;
  }

  console.log(checkoutResponse);
  //I want my checkout button to live here
  // if (page === 1) {
  //  console.log("hooray, page 1!")
  // } else if (page === 2) {
  //   setF1Visible(true);
  //   console.log("hooray, page 2!")
  // } else if (page === 3) {
  //   setF1Visible(false);
  //   setF2Visible(true);
  //   console.log("hooray, page 3!")
  // } else {
  //   setF2Visible(false);
  //   setF3Visible(true);
  //   console.log("should have checked out already!");
  // }

  var openCart = (event) => {
    event.preventDefault();
      setPage(page + 1);
      if (page === 1) {
        console.log("hooray, page 1!")
       } else if (page === 2) {
         setF1Visible(true);
         console.log("hooray, page 2!")
       } else if (page === 3) {
         setF1Visible(false);
         setF2Visible(true);
         console.log("hooray, page 3!")
       } else {
         setF2Visible(false);
         setF3Visible(true);
         console.log("should have checked out already!");
       }
  }

  return (
    <div>
      <h3>Hi hi!</h3>
      <Form isVisible={F1Visible} formNumber="F1" />
      <Form isVisible={F2Visible} formNumber="F2" />
      <Form isVisible={F3Visible} formNumber="F3" />
      <button id="checkout" onClick={(event) => {openCart(event)}}>Checkout</button>
    </div>

  )
};

export default App;
