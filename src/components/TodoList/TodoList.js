import React, { useContext } from "react";
import { TodoContext } from "../../Context";
import TodoItem from "../TodoItem/TodoItem";
import { Container } from "./styles";

const TodoList = () => {
  const { tasks } = useContext(TodoContext);

  return (
    <Container>
      {tasks.map((item) => (
        <TodoItem item={item} />
      ))}
    </Container>
  );
};

export default TodoList;
