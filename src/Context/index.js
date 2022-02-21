import React, { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

import { v4 as uuidv4 } from "uuid";
export const TodoContext = createContext({});

export const TodoProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  function handleAddTask(taskTitle) {
    const id = uuidv4();
    taskTitle.length === 0
      ? toast.error("Favor digitar uma tarefa!", {
          theme: "dark",
        })
      : setTasks([...tasks, { id: id, title: taskTitle }]);
  }

  function handleDeleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <TodoContext.Provider value={{ handleAddTask, handleDeleteTask, tasks }}>
      {children}
    </TodoContext.Provider>
  );
};
