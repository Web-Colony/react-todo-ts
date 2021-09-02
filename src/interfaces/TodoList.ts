import { TodoItem } from "./TodoItem";

export interface TodoListProps {
  items: TodoItem[];
  onTodoRemove: (id: string) => void;
}
