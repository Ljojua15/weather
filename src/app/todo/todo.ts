import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { todo } from './todo.interface';

@Injectable({
  providedIn: 'root',
})
export class Todo {
  private http = inject(HttpClient);

  private url = 'http://localhost:3000';

  public getAllToDos(): Observable<todo[]> {
    return this.http.get<todo[]>(`${this.url}/todo`);
  }

  public addToDo(description: string): Observable<any> {
    const newTodo: todo = {
      description,
      completed: false,
    };
    return this.http.post(`${this.url}/todo`, newTodo);
  }

  public updateTodo(todo: todo): Observable<todo> {
    return this.http.put<todo>(`${this.url}/todo/${todo.id}`, todo);
  }

  public deleteItem(id: any): Observable<void> {
    return this.http.delete<void>(`${this.url}/todo/${id}`);
  }
}
