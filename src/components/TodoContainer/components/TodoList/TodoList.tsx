import React from "react";
import { useStore } from "../../../../contexts/StoreContext";
import { observer } from "mobx-react";
import { TodoItem } from "../TodoItem";

export const TodoList: React.FC<{}> = observer(() => {
  const store = useStore();

  return (
    <>
      {store.todos.searchedTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </>
  );
});
