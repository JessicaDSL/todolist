import React, { useState, useContext, useEffect } from "react";
import { TodoContext } from "../../Context";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import ModalTodo from "../ModalTodo";
import { Container, Span, TaskStatus, ButtonModal } from "./styles";

const TodoItem = ({ item }) => {
  const { handleDelete } = useContext(TodoContext);

  const [state, setState] = useState(false);
  const [open, setOpen] = useState(false);
  const [hasDescription, setHasDescription] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    item.description === undefined
      ? setHasDescription(false)
      : setHasDescription(true);
  }, [item.description]);

  const style = {
    position: "absolute",
    top: "35%",
    left: "50%",
    padding: "0",
    transform: "translate(-50%, -50%)",
    width: 300,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 1,
    m: 0,
  };

  return (
    <Container state={state}>
      <TaskStatus>
        <input type="checkbox" onClick={() => setState(true)} />
      </TaskStatus>

      <p>
        {item.mainTask}{" "}
        <Span hasDescription={hasDescription} onClick={handleOpen}>
          <ArrowForwardIcon />
        </Span>
      </p>
      <div>
        <button onClick={handleOpen} style={{ backgroundColor: "#4C86A8" }}>
          EDIT
        </button>
        <button
          onClick={() => handleDelete(item)}
          style={{ backgroundColor: "#f1123b" }}
        >
          DELETE
        </button>
      </div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ModalTodo item={item} />
          <ButtonModal onClick={handleClose}>Salvar as alterações</ButtonModal>
        </Box>
      </Modal>
    </Container>
  );
};

export default TodoItem;
