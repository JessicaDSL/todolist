import React, { useState, useContext } from "react";
import { TodoContext } from "../../Context";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ModalTodo from "../ModalTodo";
import {
  Container,
  MainTask,
  TaskStatus,
  EditTask,
} from "./styles";

const TodoItem = ({ item }) => {
  const { handleDeleteTask } = useContext(TodoContext);

  const [isModalVisible, setIsModalVisible] = useState(false)
  const [state, setState] = useState(false);

  return (
    <Container>
      <MainTask>
        <TaskStatus>
          <input type="checkbox" />
        </TaskStatus>
        <p>{item.title}</p>
        <button onClick={() => (state ? setState(false) : setState(true))}>
          <ArrowForwardIosIcon />
        </button>
      </MainTask>
      <EditTask state={state}>
        <span>Adicione uma descrição</span>
        <div>
          <button onClick={()=>setIsModalVisible(true)}>EDIT</button>
          <button onClick={()=>handleDeleteTask(item.id)}>DELETE</button>
        </div>
      </EditTask>
      {isModalVisible && <ModalTodo onClose={() => setIsModalVisible(false)} item={item} />}
    </Container>
  );
};

export default TodoItem;
