import React from "react";
import { useStore } from "../../../../contexts/StoreContext";
import { observer } from "mobx-react";
import { Input } from "./TodoInputStyle";

export const TodoInput: React.FC<{}> = observer(() => {
  const { todos } = useStore();

  const handleNewTodoChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    todos.setNewTodoText(e.target.value);

  const createTodoHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // const text = e.target.value.trim();

    if (e.which !== 13) {
      return;
    }
    todos.addTodo();
  };

  return (
    <Input
      type="text"
      placeholder="todo text"
      value={todos.newTodoText}
      onChange={handleNewTodoChange}
      onKeyDown={createTodoHandler}
    />
  );
});
