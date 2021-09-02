import React from "react";
import { TodoItemProps } from "../interfaces/TodoItem";

const TodoItem: React.FC<TodoItemProps> = ({ details, onTodoRemove }) => {
  const { id, done, text } = details;

  return (
    <li>
      <span
        style={{
          paddingRight: 20,
          textDecorationLine: done ? "line-through" : "none",
        }}
      >
        {text}
      </span>
      <span>
        <div
          style={{
            color: "red",
            cursor: "pointer",
            display: "inline-block",
            paddingRight: 20,
          }}
          onClick={() => onTodoRemove(id)}
        >
          remove
        </div>
      </span>
    </li>
  );
};

export default TodoItem;
