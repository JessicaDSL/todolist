import React, { useContext, useState } from "react";
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

const ModalTodo = () => {
  const {
    closeModal,
    isModalVisible,
    selectedTasks,
    handleTitleModal,
    handleDescriptionModal,
    handleUpDateTask,
  } = useContext(TodoModalContext);

  const [taskStatus, setTaskStatus] = useState("");
  const [doStatus, setDoStatus] = useState(false);
  const [doingStatus, setDoingStatus] = useState(false);
  const [doneStatus, setDoneStatus] = useState(false);

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
                onClick={() => setTaskStatus("do")}
                doStatus={doStatus}
                type="button"
              >
                DO!
              </DoButton>
              <DoingButton
                type="button"
                onClick={() => setTaskStatus("doing")}
                doingStatus={doingStatus}
              >
                DOING!
              </DoingButton>
              <DoneButton
                type="button"
                onClick={() => setTaskStatus("done")}
                doneStatus={doneStatus}
              >
                DONE!
              </DoneButton>
            </BtnsStatusTask>
            <ButtonSave>
              <button
                type="button"
                onClick={() => {
                  handleUpDateTask(selectedTasks);
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
