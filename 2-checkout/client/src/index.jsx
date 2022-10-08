import React from "react";
import App from './components/App.jsx';
// import { render } from "react-dom";
import ReactDOM from 'react-dom';


ReactDOM.render(
  <div>
    <p>Hello, World!</p>
    <p>
      <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code>
    </p>
    <App/>
  </div>,
  document.getElementById("root")
);

/*import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
*/
// ReactDOM.render(<App />, document.getElementById("root"));