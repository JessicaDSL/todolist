import React from "react";
import { Form, Title, DescriptionTask } from "./styles";

const TodoForm = ({ item }) => {
  return (
    <Form>
      <h4>Title:</h4>
      <Title>
        <p
          contentEditable="true"
          onKeyDown={(e) => (item.title = e.target.innerText)}
        >
          {item.title}
        </p>
      </Title>
      <DescriptionTask>
        <h4>Descrição:</h4>
        <p
          contentEditable="true"
          onKeyDown={(e) => item.description = e.target.innerText}
        >
          {item.description}
        </p>
      </DescriptionTask>
    </Form>
  );
};

export default TodoForm;
