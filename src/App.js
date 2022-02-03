import React from "react";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.min.css";

import Home from "./page/Home";
import GlobalStyle from "./styles/globalStyles";

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <ToastContainer autoClose={3000}/>
      <Home />
    </div>
  );
};

export default App;
