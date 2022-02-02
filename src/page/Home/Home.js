import React, { useContext } from "react";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";

import AddQuickTodo from "../../components/AddQuickTodo";
import TodoList from "../../components/TodoList/TodoList";
import { TodoContext } from "../../Context";
import { Container, List } from "./styles";

const Home = () => {
  const { list } = useContext(TodoContext);

  return (
    <Container>
      <AddQuickTodo />
      <List>
        {list.length <= 0 ? (
          <h4>
            Ainda não possui itens na lista <SentimentVeryDissatisfiedIcon />
          </h4>
        ) : (
          <TodoList />
        )}
      </List>
    </Container>
  );
};

export default Home;
