import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Todo } from '../../../todo/todo';
import * as TodoActions from '../actions/todo.actions';
import { catchError, map, mergeMap, of, tap } from 'rxjs';

@Injectable()
export class TodoEffects {
  public actions$ = inject(Actions);
  public todoService = inject(Todo);

  public loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.loadTodos),
      mergeMap(() =>
        this.todoService.getAllToDos().pipe(
          map((todos) => TodoActions.loadTodosSuccess({ todos })),
          catchError((err) => of(TodoActions.loadTodoError({ error: err.message }))),
        ),
      ),
    ),
  );

  public addTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.addTodos),
      mergeMap((todo) =>
        this.todoService.addToDo(todo.todo.description).pipe(
          map((t) => TodoActions.addTodosSuccess({ todo: t })),
          catchError((err) => of(TodoActions.addTodosFailure({ error: err.message }))),
        ),
      ),
    ),
  );

  public deleteTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.deleteTodo),
      mergeMap(({ id }) =>
        this.todoService.deleteItem(id).pipe(
          tap(console.log),
          map(() => {
            console.log(id);
            return TodoActions.deleteTodoSuccess({ id });
          }),
          catchError((err) => of(TodoActions.deleteTodoError({ error: err.message }))),
        ),
      ),
    ),
  );
}
