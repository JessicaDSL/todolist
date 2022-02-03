import React, { useState, useContext, useEffect } from "react";
import { TodoContext } from "../../Context";
import { toast } from "react-toastify";

import { Form } from "./styles";

const AddQuickTodo = () => {
  const [task, setTask] = useState("");
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
          task.length <= 0
            ? toast.error("Favor digitar uma tarefa!", {
                theme: "dark",
              })
            : handleAddItem(task);
          setTask("");
        }}
      >
        ADD!
      </button>
    </Form>
  );
};

export default AddQuickTodo;
