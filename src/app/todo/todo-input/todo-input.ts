import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { todo } from '../todo.interface';
import * as TodoActions from '../../ngrx/store/actions/todo.actions';

@Component({
  selector: 'weather-todo-input',
  imports: [FormsModule],
  templateUrl: './todo-input.html',
  styleUrl: './todo-input.scss',
})
export class TodoInput implements OnInit {
  private store = inject(Store<{ todos: { todos: todo[] } }>);

  public toDoList = signal<string>('');

  public addTask() {
    const description = this.toDoList().trim();
    if (!description) return;
    const newTodo: todo = { description, completed: false };
    this.store.dispatch(TodoActions.addTodos({ todo: newTodo }));

    this.toDoList.set('');
  }

  ngOnInit(): void {}
}
