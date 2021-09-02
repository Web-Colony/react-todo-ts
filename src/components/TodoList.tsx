import React from "react";
import TodoItem from "./TodoItem";
import { TodoListProps } from "../interfaces/TodoList";

const TodoList: React.FC<TodoListProps> = ({ items, onTodoRemove }) => {
  return (
    <ul>
      {items.map((item) => (
        <div key={item.id}>
          <TodoItem onTodoRemove={onTodoRemove} details={item} />
        </div>
      ))}
    </ul>
  );
};

export default TodoList;
