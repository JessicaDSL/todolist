import React, { createContext, useState } from "react";

export const TodoContext = createContext({});

export const TodoProvider = ({ children }) => {
  const [list, setList] = useState([]);

  function handleAddItem(task) {
    setList([...list, { work: task }]);
  }

  return (
    <TodoContext.Provider value={{ handleAddItem, list }}>
      {children}
    </TodoContext.Provider>
  );
};
