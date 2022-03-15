import React, { useState, useContext, useEffect } from "react";
import {
  Form,
  Title,
  DescriptionTask,
  BtnsStatusTask,
  ButtonSave,
  DoButton,
  DoingButton,
  DoneButton,
} from "./styles";

import { TodoContext } from "../../Context";

const TodoForm = ({ task }) => {
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [taskStatus, setTaskStatus] = useState("");
  const [doStatus, setDoStatus] = useState(false);
  const [doingStatus, setDoingStatus] = useState(false);
  const [doneStatus, setDoneStatus] = useState(false);
  const { closeModal } = useContext(TodoContext);

  function handleInfoModal() {
    task.title = newTitle || task.title;
    task.description = newDescription || task.description;
    task.status = taskStatus;
    
    closeModal();
  }

  useEffect(() => {
    
    setTaskStatus(task.status) 
  }, [task.status])

  useEffect(() => {
    taskStatus === "do" ? setDoStatus(true) : setDoStatus(false);
    taskStatus === "doing" ? setDoingStatus(true) : setDoingStatus(false);
    taskStatus === "done" ? setDoneStatus(true) : setDoneStatus(false);
  }, [taskStatus]);

  return (
    <Form>
      <label>Title:</label>
      <Title onChange={(e) => setNewTitle(e.target.value)} rows="1">
        {task.title}
      </Title>
      <label>Descrição:</label>
      <DescriptionTask onChange={(e) => setNewDescription(e.target.value)}>
        {task.description}
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
        <button type="button" onClick={() => handleInfoModal(taskStatus)}>
          Save Changes!
        </button>
      </ButtonSave>
    </Form>
  );
};

export default TodoForm;
