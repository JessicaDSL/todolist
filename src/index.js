import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { TodoProvider } from "./Context";
import { TodoModalProvider } from "./Context/TodoModalProvider";

ReactDOM.render(
  <React.StrictMode>
    <TodoProvider>
      <TodoModalProvider>
        <App />
      </TodoModalProvider>
    </TodoProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
