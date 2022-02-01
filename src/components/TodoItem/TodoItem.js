import React from "react";

const TodoItem = ({ item }) => {
  return (
    <div>
      <h2>
        {item.work} <span>seta</span>
      </h2>
      <button>Editar</button>
      <button>Remover</button>
    </div>
  );
};

export default TodoItem;
