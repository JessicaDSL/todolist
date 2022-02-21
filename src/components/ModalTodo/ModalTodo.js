import React from "react";
import TodoForm from "../TodoForm";
import { Container, Content } from "./styles";

const ModalTodo = ({id="modal", onClose=() => {}, item }) => {

  const handleOutSideClick = (e) => {
    if(e.target.id === id) onClose();
  }

  return (
    <Container id={id} onClick={handleOutSideClick}>
      <Content >
        <button onClick={onClose}>Close</button>
        <TodoForm item={item}/>
      </Content>
    </Container>
  );
};

export default ModalTodo;
