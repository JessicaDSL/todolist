import React, { useState, useContext } from "react";
import { TodoContext } from "../../Context";

import { Form } from "./styles";

const AddQuickTodo = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const { handleAddTask } = useContext(TodoContext);

  function getTask(e) {
    const newText = e.target.value;
    setTaskTitle(newText);
  }

  return (
    <Form>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        onChange={getTask}
        value={taskTitle}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          handleAddTask(taskTitle);
          setTaskTitle("");
        }}
      >
        ADD!
      </button>
    </Form>
  );
};

export default AddQuickTodo;
