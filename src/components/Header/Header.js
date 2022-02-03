import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";

import { Container } from "./styles";

const Header = () => {
  return (
    <Container>
      <p>
        <h1>Todo List</h1>
      </p>
      <p>
        <GitHubIcon />
      </p>
    </Container>
  );
};

export default Header;
