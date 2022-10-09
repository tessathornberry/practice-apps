import React from "react";
import App from './components/App.jsx';
// import { render } from "react-dom";
import ReactDOM from 'react-dom';

// const rootGlue = () => {

// }
ReactDOM.render(
  <div>
    <p>Please complete your purchase below</p>
    <p>
      {/* <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code> */}
    </p>
    <App/>
  </div>,
  document.getElementById("root")
);
