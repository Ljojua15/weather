import { Component, effect, inject, OnInit, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { todo } from '../todo.interface';
import * as TodoActions from '../../ngrx/store/actions/todo.actions';
import { AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'weather-todo-list',
  imports: [AsyncPipe, FormsModule],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.scss',
})
export class TodoList implements OnInit {
  public isCompleted = false;

  private store = inject(Store<{ todos: { todos: todo[] } }>);

  todos$ = this.store.select((state) => state.todos.todos);

  constructor() {
    effect(() => {});
  }
  change(todo: boolean) {
    this.isCompleted = !this.isCompleted;
    console.log(this.isCompleted);
  }
  ngOnInit(): void {
    this.store.dispatch(TodoActions.loadTodos());
  }

  public deleteTodo(id: any) {
    this.store.dispatch(TodoActions.deleteTodo({ id }));
  }
}
