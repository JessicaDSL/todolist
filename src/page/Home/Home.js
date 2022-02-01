import React, { useContext } from "react";
import AddQuickTodo from "../../components/AddQuickTodo";
import TodoList from "../../components/TodoList/TodoList";
import { TodoContext } from "../../Context";
import { Container } from "./styles";

const Home = () => {
  const { list } = useContext(TodoContext);

  return (
    <Container>
      <AddQuickTodo />
      {list.length <= 0 ? "Ainda não possui itens na lista" : <TodoList />}
    </Container>
  );
};

export default Home;
