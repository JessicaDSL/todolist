import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";

import { Container, Title } from "./styles";

const Header = () => {
  return (
    <Container>
      <Title>
        Todo List
      </Title>
      <p>
        <GitHubIcon />
      </p>
    </Container>
  );
};

export default Header;
