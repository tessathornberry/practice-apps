import React from "react";
import App from ('./App.jsx')
import { render } from "react-dom";

render(
  <div>
    <p>Hello, World!</p>
    <p><App/>
      <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code>
    </p>
  </div>,
  document.getElementById("root")
);
