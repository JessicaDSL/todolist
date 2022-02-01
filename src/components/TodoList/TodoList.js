import React, { useContext } from "react";
import { TodoContext } from "../../Context";
import TodoItem from "../TodoItem/TodoItem";
import { Container } from "./styles";

const TodoList = () => {
  const { list } = useContext(TodoContext);

  return (
    <Container>
      {list.map((item) => (
        <TodoItem item={item} />
      ))}
    </Container>
  );
};

export default TodoList;
