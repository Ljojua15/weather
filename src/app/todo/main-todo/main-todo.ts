import { Component } from '@angular/core';
import { TodoInput } from '../todo-input/todo-input';
import { TodoList } from '../todo-list/todo-list';

@Component({
  selector: 'weather-main-todo',
  imports: [TodoInput, TodoList],
  templateUrl: './main-todo.html',
  styleUrl: './main-todo.scss',
})
export class MainTodo {}
