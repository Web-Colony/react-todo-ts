import React, { useRef } from "react";
import { TodoItem } from "../interfaces/TodoItem";

interface TodoFormProps {
  onAddTodo: (todo: TodoItem) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ onAddTodo }) => {
  const todoTextRef = useRef<HTMLInputElement>(null);

  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const todoText = todoTextRef.current!.value.trim();
    if (todoText.length === 0) {
      alert("Invalid Todo");
      return;
    }
    const newTodo = new TodoItem(todoText);
    onAddTodo(newTodo);

    // clear text value
    todoTextRef.current!.value = "";
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <div>
        <label htmlFor="todo-text"> text </label>
        <input type="text" id="todo-text" ref={todoTextRef} />
      </div>
      <button type="submit"> Add Todo</button>
    </form>
  );
};

export default TodoForm;
