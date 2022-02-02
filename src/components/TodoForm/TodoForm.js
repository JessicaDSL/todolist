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
        <p
          contentEditable="true"
          onKeyDown={(e) => (item["description"] = e.target.innerText)}
        >
          {item.description}
        </p>
      </form>
    </Container>
  );
};

export default TodoForm;
