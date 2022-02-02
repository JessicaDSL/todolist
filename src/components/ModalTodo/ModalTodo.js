import React from "react";
import TodoForm from "../TodoForm";
import { Container } from "./styles";

const ModalTodo = ({ item }) => {
  return (
    <Container>
      <TodoForm item={item} />
    </Container>
  );
};

export default ModalTodo;
