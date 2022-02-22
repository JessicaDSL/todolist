import React, { createContext, useState } from "react";
import { toast } from "react-toastify";

import { v4 as uuidv4 } from "uuid";
export const TodoContext = createContext({});

export const TodoProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  function openModal() {
    setIsModalVisible(true)
  }
  
  function closeModal() {
    setIsModalVisible(false)
  }

  function handleAddTask(taskTitle) {
    const id = uuidv4();
    taskTitle.length === 0
      ? toast.error("Please enter a task!", {
          theme: "dark",
        })
      : setTasks([...tasks, { id: id, title: taskTitle }]);
  }

  function handleDeleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <TodoContext.Provider value={{ handleAddTask, handleDeleteTask, closeModal, openModal, tasks, isModalVisible }}>
      {children}
    </TodoContext.Provider>
  );
};
