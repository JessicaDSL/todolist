import React, { useState, useContext } from "react";
import { TodoContext } from "../../Context";

const AddQuickTodo = () => {
  const [task, setTask] = useState([""]);

  const { handleAddItem } = useContext(TodoContext);

  function getTask(e) {
    const newText = e.target.value;
    setTask(newText);
  }

  return (
    <form>
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
        ADD
      </button>
    </form>
  );
};

export default AddQuickTodo;
