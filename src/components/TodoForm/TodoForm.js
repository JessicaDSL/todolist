import React, { useState } from "react";
import { Form, Title, DescriptionTask } from "./styles";

const TodoForm = ({ item }) => {
  const [state, setState] = useState(false);

  return (
    <Form>
      <h4>Title:</h4>
      <Title state={state}>
        <p
          contentEditable={state}
          onKeyDown={(e) => (item.work = e.target.innerText)}
        >
          {item.work}
        </p>
        <button type="button" onClick={() => setState(true)}>
          EDIT
        </button>
      </Title>
      <DescriptionTask>
        <h4>Descrição:</h4>
        <p
          contentEditable="true"
          onKeyDown={(e) => (item["description"] = e.target.innerText)}
        >
          {item.description}
        </p>
      </DescriptionTask>
    </Form>
  );
};

export default TodoForm;
