import React, { useContext } from "react";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";

import AddQuickTodo from "../../components/AddQuickTodo";
import Header from "../../components/Header";
import TodoList from "../../components/TodoList/TodoList";
import { TodoContext } from "../../Context";
import { Background, Container} from "./styles";

const Home = () => {
  const { tasks } = useContext(TodoContext);

  return (
    <Background>
      <Header />
      
      <AddQuickTodo />
      {tasks.length <= 0 ? (
        <Container>
          <h4>
            Ainda não possui itens na lista <SentimentVeryDissatisfiedIcon />
          </h4>
        </Container>
      ) : (
        <TodoList />
      )}
    </Background>
  );
};

export default Home;
