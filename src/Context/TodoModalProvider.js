import React, { createContext, useState, useEffect } from "react";

export const TodoModalContext = createContext({});

export const TodoModalProvider = ({ children }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedTasks, setSelectedTasks] = useState();
  const [taskStatus, setTaskStatus] = useState("");
  const [doStatus, setDoStatus] = useState(false);
  const [doingStatus, setDoingStatus] = useState(false);
  const [doneStatus, setDoneStatus] = useState(false);

  useEffect(() => {
    taskStatus === "do" ? setDoStatus(true) : setDoStatus(false);
    taskStatus === "doing" ? setDoingStatus(true) : setDoingStatus(false);
    taskStatus === "done" ? setDoneStatus(true) : setDoneStatus(false);
  }, [taskStatus]);

  function openModal(task) {
    setSelectedTasks(task);
    setIsModalVisible(true);
    task.status === "do" ? setDoStatus(true) : setDoStatus(false);
    task.status === "doing" ? setDoingStatus(true) : setDoingStatus(false);
    task.status === "done" ? setDoneStatus(true) : setDoneStatus(false);
  }

  function closeModal() {
    setIsModalVisible(false);
    setSelectedTasks();
    setTaskStatus();
  }

  function handleTitleModal(e) {
    const titleModal = e.target.value;
    setSelectedTasks({ ...selectedTasks, title: titleModal });
  }

  function handleDescriptionModal(e) {
    const descriptionModal = e.target.value;
    setSelectedTasks({ ...selectedTasks, description: descriptionModal });
  }

  function addStatusTodo(statusModal) {
    setSelectedTasks({ ...selectedTasks, status: statusModal });
    setTaskStatus(statusModal);
  }

  return (
    <TodoModalContext.Provider
      value={{
        closeModal,
        taskStatus,
        doStatus,
        doingStatus,
        doneStatus,
        openModal,
        isModalVisible,
        selectedTasks,
        handleTitleModal,
        handleDescriptionModal,
        addStatusTodo,
      }}
    >
      {children}
    </TodoModalContext.Provider>
  );
};