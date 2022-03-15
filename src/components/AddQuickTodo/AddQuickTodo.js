import React, { useState, useContext } from "react";
import { TodoContext } from "../../Context";

import { Form, Input, Button } from "./styles";

const AddQuickTodo = () => {
  const [task, setTask] = useState("");
  const { addTask } = useContext(TodoContext);

  return (
    <Form>
      <Input
        type="text"
        placeholder="Add a new task..."
        onChange={(e) => setTask(e.target.value)}
        value={task}
      />
      <Button
        onClick={(e) => {
          e.preventDefault();
          addTask(task);
          setTask("");
        }}
      >
        ADD!
      </Button>
    </Form>
  );
};

export default AddQuickTodo;
