import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { TodoItem } from "./interfaces/TodoItem";

const App: React.FC = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  const addNewTodo = (todoItem: TodoItem) => {
    setTodos([todoItem, ...todos]);
  };

  return (
    <div>
      <TodoForm onAddTodo={addNewTodo} />
      <TodoList items={todos} />
    </div>
  );
};

export default App;
