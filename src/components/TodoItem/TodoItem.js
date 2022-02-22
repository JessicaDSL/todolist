import React, { useState, useContext } from "react";
import { TodoContext } from "../../Context";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import ModalTodo from "../ModalTodo";
import {
  Container,
  Task,
  DescriptionTask,
  CheckStatus,
  Button,
  BtnCheck,
} from "./styles";

const TodoItem = ({ task }) => {
  const { handleDeleteTask, openModal, isModalVisible } =
    useContext(TodoContext);

  const [openDescriptionBox, setOpenDescriptionBox] = useState(false);

  return (
    <Container>
      <Task>
        <CheckStatus>{task.title}</CheckStatus>
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
          <button onClick={() => openModal()}>EDIT</button>
          <button onClick={() => handleDeleteTask(task.id)} style={{backgroundColor: '#fe4370'}}>DELETE</button>
        </div>
      </DescriptionTask>
      {isModalVisible && <ModalTodo task={task} />}
    </Container>
  );
};

export default TodoItem;
