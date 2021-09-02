export interface ITodoItem {
  id: string;
  text: string;
  done: boolean;
}

export interface TodoItemProps {
  details: TodoItem;
  onTodoRemove: (id: string) => void;
}

export class TodoItem implements ITodoItem {
  id: string;
  text: string;
  done: boolean;

  constructor(text: string) {
    this.done = false;
    this.id = Math.random().toString();
    this.text = text;
  }

  update(status: boolean) {
    this.done = status;
  }
}
