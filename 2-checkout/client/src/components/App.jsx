import React from "react";


const {useState, useEffect} = React;

const App = () => {
  const [page, setPage] = useState(1);
  const [isVisible, setIsVisible] = useState(true);
  const [F1Visible, setF1Visible] = useState(false);
  const [F2Visible, setF2Visible] = useState(false);
  const [F3Visible, setF3Visible] = useState(false);

  /** declare result object and assign cookie as a value */
  var checkoutResponse = {};
  checkoutResponse.s_id = document.cookie;

  /** function to set forms visible or not */
  var Form = ({formNumber, isVisible}) => {
    return isVisible ? <div className="form">{formNumber}, this one</div> : null;

    // if (isVisible) {
    //   return <div className="form">{formNumber}, this one</div>;
    // }
    // return null;
    // return <div className="form">{formNumber}, make null</div>;
  }

  var openCart = (event) => {
    event.preventDefault();
    setPage(page + 1);
    if (page === 1) {
      console.log("hooray, page 1!")
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
