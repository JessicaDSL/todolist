import React, { useState, useContext, useEffect } from "react";
import { TodoContext } from "../../Context";
import { TodoModalContext } from "../../Context/TodoModalProvider";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { Container, Task, DescriptionTask, TitleTask, Button } from "./styles";

const TodoItem = ({ task }) => {
  const { handleDeleteTask, tasks } = useContext(TodoContext);
  const { openModal, selectedTasks, setState, state } =
    useContext(TodoModalContext);

  const [openDescriptionBox, setOpenDescriptionBox] = useState(false);
  return (
    <Container>
      <Task>
          {task.title}
        <Button
          onClick={() =>
            openDescriptionBox
              ? setOpenDescriptionBox(false)
              : setOpenDescriptionBox(true)
          }
        >
          <ArrowForwardIosIcon />
        </Button>
      </Task>
      <DescriptionTask openDescriptionBox={openDescriptionBox}>
        <span>Add a description...</span>
        <div>
          <button
            onClick={() => {
              openModal(task);
            }}
          >
            EDIT
          </button>
          <button
            onClick={() => handleDeleteTask(task.id)}
            style={{ backgroundColor: "#fe4370" }}
          >
            DELETE
          </button>
        </div>
      </DescriptionTask>
    </Container>
  );
};

export default TodoItem;
