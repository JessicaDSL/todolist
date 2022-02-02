import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
  
  body {
    font-family: 'Montserrat Alternates', sans-serif;
    background: #141628;
    color: #000;
  }
  
  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
