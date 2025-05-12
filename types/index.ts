type TodoItem = {
  id: string;
  title: string;
};

type TodoList = {
  id: string;
  title: string;
  items: TodoItem[];
};

export type { TodoItem, TodoList };
