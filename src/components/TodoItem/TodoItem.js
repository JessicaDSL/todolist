import React, { useState, useContext } from "react";
import { TodoContext } from "../../Context";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import ModalTodo from "../ModalTodo";

const TodoItem = ({ item }) => {
  const { handleDelete } = useContext(TodoContext);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      <h2>
        {item.work} <span>seta</span>
      </h2>
      <p>{item.description}</p>
      <button onClick={handleOpen}>Editar</button>
      <button onClick={() => handleDelete(item)}>Remover</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ModalTodo item={item} handleClose={handleClose} />
          <button onClick={handleClose}>Close Modal</button>
        </Box>
      </Modal>
    </div>
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
