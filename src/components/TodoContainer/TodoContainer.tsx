import React from "react";
import { TodoInput } from "./components/TodoInput/TodoInput";
import { TodoList } from "./components/TodoList/TodoList";
import { Container } from "./TodoContainerStyle";

export const TodoContainer: React.FC<{}> = () => {
  return (
    <Container>
      <TodoInput />
      <TodoList />
    </Container>
  );
};
