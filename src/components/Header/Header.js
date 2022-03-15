import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";

import { Container, Link } from "./styles";

const Header = () => {
  return (
    <Container>
      Todo List
      <Link
        href="https://github.com/JessicaDSL/todolist"
        target="_blank"
        rel="noreferrer"
      >
        <GitHubIcon />
      </Link>
    </Container>
  );
};

export default Header;
