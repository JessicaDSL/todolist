import React, { useState, useContext, useEffect } from "react";
import { TodoContext } from "../../Context";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import ModalTodo from "../ModalTodo";
import { Container, Span, TaskStatus, Button } from "./styles";

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
    top: "55%",
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

  console.log(item.description);
  return (
    <Container state={state}>
      <TaskStatus>
        <input type="checkbox" onClick={() => setState(true)} />
        <span></span>
      </TaskStatus>

      <p>
        {item.work}{" "}
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
          <Button onClick={handleClose}>Salvar as alterações</Button>
        </Box>
      </Modal>
    </Container>
  );
};

export default TodoItem;

/*/*
if(newTitle === '' &&  message  === '') {
  console.log("favor preencher alguma coisa ae mano")
} else if(newTitle === '' &&  message  !== ''){
  setList([{ work: item.work, descriptionTask: message }])
} else if(newTitle !== '' &&  message  === '') {
  setList([{ work: newTitle, descriptionTask: '' }])
} else {
  setList([{ work: newTitle, descriptionTask: message }])
}*/

/*newTitle === ""
      ? setList([...list, { work: item.work, descriptionTask: message }])
    : setList([...list, { work: newTitle, descriptionTask: "" }]);
    message === ""
      ? setList([...list, { work: newTitle, descriptionTask: "" }])
      : setList([...list, { work: newTitle, descriptionTask: message }]);*/
