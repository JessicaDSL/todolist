import React, { useContext } from "react";
import { TodoContext } from "../../Context";

const TodoItem = ({ item }) => {
  const { handleEdit, handleDelete } = useContext(TodoContext);

  return (
    <div>
      <h2>
        {item.work} <span>seta</span>
      </h2>
      <button onClick={() => handleEdit(item)}>Editar</button>
      <button onClick={() => handleDelete(item)}>Remover</button>
    </div>
  );
};

export default TodoItem;
