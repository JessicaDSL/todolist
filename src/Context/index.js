import React, { createContext, useState } from "react";

export const TodoContext = createContext({});

export const TodoProvider = ({ children }) => {
  const [list, setList] = useState([]);

  function handleAddItem(task) {
    setList([...list, { work: task }]);
  }

  function handleDelete(item) {
    const newList = list.filter((l) => l !== item);
    setList(newList);
  }

  return (
    <TodoContext.Provider value={{ handleAddItem, handleDelete, list }}>
      {children}
    </TodoContext.Provider>
  );
};
