import React, { useContext } from "react";
import { TodoContext } from "../../Context";
import TodoItem from "../TodoItem/TodoItem";
import { Container } from "./styles";

const TodoList = () => {
  const { tasks } = useContext(TodoContext);

  return (
    <Container>
      {tasks.map((task) => (
        <TodoItem task={task} key={task.id} />
      ))}
    </Container>
  );
};

export default TodoList;
