import React, { createContext, useState } from "react";

export const TodoModalContext = createContext({});

export const TodoModalProvider = ({ children }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedTasks, setSelectedTasks] = useState()

  function openModal(task) {
    setSelectedTasks(task)
    setIsModalVisible(true);
  }

  function closeModal() {
    setIsModalVisible(false);
  }

  function handleTitleModal(e) {
    const titleModal = e.target.value
    setSelectedTasks({...selectedTasks, title: titleModal })
  }

  function handleDescriptionModal(e) {
    const descriptionModal = e.target.value
    setSelectedTasks({...selectedTasks, description: descriptionModal })
  }

  function handleUpDateTask(task) {
  }

  
  return (
    <TodoModalContext.Provider
      value={{ closeModal, openModal, handleUpDateTask, isModalVisible, selectedTasks, handleTitleModal, handleDescriptionModal }}
    >
      {children}
    </TodoModalContext.Provider>
  );
};
