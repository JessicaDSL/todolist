import React, { createContext, useState } from "react";

export const TodoContext = createContext({});

export const TodoProvider = ({ children }) => {
  const [list, setList] = useState([{}]);

  function handleAddItem(task) {
    setList([...list, task]);
  }

  return (
    <TodoContext.Provider value={{ handleAddItem }}>
      {children}
    </TodoContext.Provider>
  );
};
