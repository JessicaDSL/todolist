import React, { useContext } from "react";
import { TodoContext } from "../../Context";
import TodoItem from "../TodoItem/TodoItem";
import { Container } from "./styles";

const TodoList = () => {
  const { tasks } = useContext(TodoContext);

  return (
    <Container>
      {tasks.map((task, key) => (
        <TodoItem task={task} key={key} />
      ))}
    </Container>
  );
};

export default TodoList;
