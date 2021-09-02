import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { TodoItem } from "./interfaces/TodoItem";

const App: React.FC = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  const addNewTodo = (todoItem: TodoItem) => {
    setTodos((prevTodos) => [todoItem, ...prevTodos]);
  };

  const removeTodo = (id: string) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  return (
    <div>
      <TodoForm onAddTodo={addNewTodo} />
      <TodoList items={todos} onTodoRemove={removeTodo} />
    </div>
  );
};

export default App;
