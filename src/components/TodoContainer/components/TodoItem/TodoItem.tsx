import React from "react";
import { TodoType } from "../../../../stores/Todos";
import { observer } from "mobx-react";
import { TodoItemDiv, TodoItemCheckBox } from "./TodoItemStyle";

type TodoItemProps = {
  todo: TodoType;
};

export const TodoItem: React.FC<TodoItemProps> = observer(({ todo }) => {
  return (
    <TodoItemDiv>
      <span>{todo.text}</span>
      <TodoItemCheckBox
        className="toggle"
        type="checkbox"
        checked={todo.isChecked}
        onChange={() => todo.check()}
      />
    </TodoItemDiv>
  );
});
