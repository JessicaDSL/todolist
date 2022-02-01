import React from "react";
import AddQuickTodo from "../../components/AddQuickTodo";
import { Container } from "./styles";

const Home = () => {
  return (
    <Container>
      <AddQuickTodo />
    </Container>
  );
};

export default Home;
