import { todo } from '../../../todo/todo.interface';

export interface TodoState {
  todos: todo[];
  loading: boolean;
  error?: string;
}

export const initialTodoState: TodoState = {
  todos: [],
  loading: false,
};
