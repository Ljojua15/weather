import { createReducer, on } from '@ngrx/store';
import { initialTodoState } from '../state/todo.state';
import * as TodoActions from '../actions/todo.actions';

export const todoReducer = createReducer(
  initialTodoState,

  on(TodoActions.loadTodosSuccess, (state, { todos }) => ({ ...state, todos })),

  on(TodoActions.addTodos, (state, { todo }) => ({ ...state, todos: [...state.todos, todo] })),

  on(TodoActions.deleteTodoSuccess, (state, { id }) => ({
    ...state,
    todos: state.todos.filter((t) => t.id !== id),
  })),
);
