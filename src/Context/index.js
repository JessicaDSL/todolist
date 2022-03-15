import React, { createContext, useState } from "react";
import { toast } from "react-toastify";

import { v4 as uuidv4 } from "uuid";
export const TodoContext = createContext({});

export const TodoProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  function addTask(title) {
    const id = uuidv4();
    title.length === 0
      ? toast.error("Please enter a task!", {
          theme: "dark",
        })
      : setTasks([...tasks, { id, title }]);
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function getTasks() {
    return tasks;
  }



  function updateTask(task) {
    const list = [...tasks];
    const index = list.findIndex((item) => item.id === task.id);
    list.splice(index, 1, task);
    setTasks(list);
  }

  return (
    <TodoContext.Provider
      value={{
        addTask,
        deleteTask,
        updateTask,
        getTasks,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};