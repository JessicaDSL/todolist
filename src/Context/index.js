import React, { createContext, useState } from "react";
import { toast } from "react-toastify";

import { v4 as uuidv4 } from "uuid";
export const TodoContext = createContext({});

export const TodoProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  function handleAddTask(title) {
    const id = uuidv4();
    title.length === 0
      ? toast.error("Please enter a task!", {
          theme: "dark",
        })
      : setTasks([...tasks, { id, title }]);
  }

  function handleDeleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <TodoContext.Provider
      value={{
        handleAddTask,
        handleDeleteTask,
        tasks,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
