import { createAction, props } from '@ngrx/store';
import { todo } from '../../../todo/todo.interface';

export const loadTodos = createAction('[Todo] load todos');
export const loadTodosSuccess = createAction('[Todo] Success', props<{ todos: todo[] }>());
export const loadTodoError = createAction(
  '[Todo] load Todo error',
  props<{
    error: string;
  }>(),
);

export const addTodos = createAction('[Todo] Add Todo', props<{ todo: todo }>());
export const addTodosSuccess = createAction('[Todo] Add Todo Success', props<{ todo: todo }>());
export const addTodosFailure = createAction('[Todo] Add Todo Failure', props<{ error: string }>());

export const deleteTodo = createAction('[Todo] delete todo', props<{ id: number }>());
export const deleteTodoSuccess = createAction(
  '[Todo] delete todo Success',
  props<{ id: number }>(),
);
export const deleteTodoError = createAction('[Todo] delete todo Error', props<{ error: string }>());
