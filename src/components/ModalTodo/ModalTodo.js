import React, { useContext } from "react";
import CancelIcon from "@material-ui/icons/Cancel";

import {
  Container,
  Content,
  Button,
  Form,
  Title,
  DescriptionTask,
  ButtonSave,
  BtnsStatusTask,
  DoButton,
  DoingButton,
  DoneButton,
} from "./styles";
import { TodoModalContext } from "../../Context/TodoModalProvider";
import { TodoContext } from "../../Context";

const ModalTodo = () => {
  const {
    closeModal,
    isModalVisible,
    selectedTasks,
    handleTitleModal,
    handleDescriptionModal,
    addStatusTodo,
    doStatus,
    doingStatus,
    doneStatus,
  } = useContext(TodoModalContext);

  const { updateTask } = useContext(TodoContext);

  const handleOutSideClick = (e) => {
    if (e.target.id === id) closeModal();
  };

  const id = "modal";

  return (
    <Container
      id={id}
      onClick={handleOutSideClick}
      isModalVisible={isModalVisible}
    >
      <Content>
        <Button onClick={() => closeModal()}>
          <CancelIcon />
        </Button>
        {selectedTasks && (
          <Form>
            <label>Title:</label>
            <Title
              onChange={(e) => {
                handleTitleModal(e);
              }}
              rows="1"
            >
              {selectedTasks.title}
            </Title>
            <label>Descrição:</label>
            <DescriptionTask onChange={(e) => handleDescriptionModal(e)}>
              {selectedTasks.description}
            </DescriptionTask>
            <BtnsStatusTask>
              <DoButton
                onClick={() => {
                  addStatusTodo("do");
                }}
                doStatus={doStatus}
                type="button"
              >
                DO!
              </DoButton>
              <DoingButton
                type="button"
                onClick={() => {
                  addStatusTodo("doing");
                }}
                doingStatus={doingStatus}
              >
                DOING!
              </DoingButton>
              <DoneButton
                type="button"
                onClick={() => {
                  addStatusTodo("done");
                }}
                doneStatus={doneStatus}
              >
                DONE!
              </DoneButton>
            </BtnsStatusTask>
            <ButtonSave>
              <button
                type="button"
                onClick={() => {
                  updateTask(selectedTasks);
                  closeModal();
                }}
              >
                Save Changes!
              </button>
            </ButtonSave>
          </Form>
        )}
      </Content>
    </Container>
  );
};

export default ModalTodo;