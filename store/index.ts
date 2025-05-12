import { create } from "zustand";
import "react-native-get-random-values";
import { v4 as uuidv4 } from 'uuid';
import { TodoList } from "@/types";

type TodosState = {
  todos: TodoList[];
  currentList: string | null,
  addList: (title: string) => void;
  removeList: (id: string) => void;
  addItem: (listId: string, title: string) => void;
  removeItem: (listId: string, itemId: string) => void;
};

export const useTodos = create<TodosState>((set) => ({
  todos: [],
  currentList: null,

  addList: (title) => set((state) => ({ 
    todos: [...state.todos, { id: uuidv4(), title, items: [] }] 
  })),

  removeList: (id) => set((state) => ({ 
    todos: state.todos.filter((list) => list.id !== id) 
  })),

  addItem: (listId, title) =>
    set((state) => ({
      todos: state.todos.map((list) => list.id === listId 
        ? { ...list, items: [...list.items, { id: uuidv4(), title: title } ] } 
        : list
      ),
    })
  ),

  removeItem: (listId, itemId) =>
    set((state) => ({
      todos: state.todos.map((list) => list.id === listId
        ? { ...list, items: list.items.filter((item) => item.id !== itemId) }
        : list
      ),
    })),
}));
