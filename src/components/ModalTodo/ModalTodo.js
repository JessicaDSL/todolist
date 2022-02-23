import React, {useContext} from "react";
import TodoForm from "../TodoForm";
import CancelIcon from '@material-ui/icons/Cancel';

import { TodoContext } from "../../Context";
import { Container, Content, Button, ButtonSave } from "./styles";

const ModalTodo = ({id="modal", task }) => {

  const { closeModal } = useContext(TodoContext)

  const handleOutSideClick = (e) => {
    if(e.target.id === id) closeModal();
  }

  return (
    <Container id={id} onClick={handleOutSideClick}>
      <Content >
        <Button onClick={() => closeModal()}><CancelIcon/></Button>
        <TodoForm task={task}/>
        
      </Content>
    </Container>
  );
};

export default ModalTodo;
