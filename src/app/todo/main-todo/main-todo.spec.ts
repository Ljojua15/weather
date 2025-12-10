import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTodo } from './main-todo';

describe('MainTodo', () => {
  let component: MainTodo;
  let fixture: ComponentFixture<MainTodo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainTodo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainTodo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
