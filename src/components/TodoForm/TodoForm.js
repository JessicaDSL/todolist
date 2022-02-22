import React from "react";
import { Form, Title, DescriptionTask, Btns } from "./styles";

const TodoForm = ({ task }) => {
  return (
    <Form suppressContentEditableWarning = { true } >
      Title:
      <Title
        contentEditable="true"
        onKeyDown={(e) => (task.title = e.target.innerText)}
      >
        {task.title}
      </Title>
      Descrição:
      <DescriptionTask
        contentEditable="true"
        suppressContentEditableWarning="true"
        onKeyDown={(e) => (task.description = e.target.innerText)}
      >
        {task.description}
      </DescriptionTask>
      <Btns>
        <button style={{ backgroundColor: "#ff6d54" }}>DO!</button>
        <button style={{ backgroundColor: "#00c2ea" }}>DOING!</button>
        <button style={{ backgroundColor: "#00de3d" }}>DONE!</button>
      </Btns>
    </Form>
  );
};

export default TodoForm;
