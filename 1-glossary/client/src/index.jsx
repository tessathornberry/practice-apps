import React from "react";
import { render } from "react-dom";
import App from './components/App.jsx';

render(
  <div>
    <p>Hello, World!</p>
    <App />
  </div>,
  document.getElementById("root")
);
