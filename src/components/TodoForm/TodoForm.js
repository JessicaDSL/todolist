import React from "react";
import { Container } from "./styles";

const TodoForm = ({ item }) => {
  return (
    <Container>
      <form>
        <h1
          contentEditable="true"
          onKeyDown={(e) => (item.work = e.target.innerText)}
        >
          {item.work}
        </h1>
        <p>{item.description}</p>

        <textarea
          rows="5"
          cols="33"
          onChange={(e) => (item["description"] = e.target.value)}
        />
      </form>
    </Container>
  );
};

export default TodoForm;
