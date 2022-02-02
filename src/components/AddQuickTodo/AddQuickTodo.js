import React, { useState, useContext } from "react";
import { TodoContext } from "../../Context";

import { Form } from "./styles";

const AddQuickTodo = () => {
  const [task, setTask] = useState([""]);
  const { handleAddItem } = useContext(TodoContext);

  function getTask(e) {
    const newText = e.target.value;
    setTask(newText);
  }

  return (
    <Form>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        onChange={getTask}
        value={task}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          handleAddItem(task);
          setTask("");
        }}
      >
        OK!
      </button>
    </Form>
  );
};

export default AddQuickTodo;
